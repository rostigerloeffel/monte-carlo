import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Label } from 'recharts';

const parseNumbers = (input: string): number[] => {
  return input
    .split(/[ ,]+/)
    .map(s => s.trim())
    .filter(Boolean)
    .map(Number)
    .filter(n => !isNaN(n));
};

const Home: React.FC = () => {
  const [input, setInput] = useState("");
  const values = parseNumbers(input);
  const [remaining, setRemaining] = useState("");
  const remainingValue = Number(remaining);
  const [iterationsInput, setIterationsInput] = useState("10000");
  const iterations = Math.max(100, Math.min(1000000, Number(iterationsInput) || 10000));

  // Daten für das Diagramm: x = Position (ab 1), y = Wert
  const chartData = values.map((y, i) => ({ x: i + 1, y }));

  // Monte-Carlo-Prognose
  const monteCarloHistogram = React.useMemo(() => {
    if (values.length === 0 || !Number.isFinite(remainingValue) || remainingValue <= 0) return [];
    const accCounts: Record<number, number> = {};
    for (let i = 0; i < iterations; i++) {
      let sum = 0;
      let acc = 0;
      while (sum < remainingValue) {
        const idx = Math.floor(Math.random() * values.length);
        sum += values[idx];
        acc++;
      }
      accCounts[acc] = (accCounts[acc] || 0) + 1;
    }
    // Umwandeln in Array für recharts
    return Object.entries(accCounts)
      .map(([acc, count]) => ({ acc: Number(acc), count }))
      .sort((a, b) => a.acc - b.acc);
  }, [values, remainingValue, iterations]);

  // Berechne Perzentile aus den Simulationsdaten
  const percentiles = React.useMemo(() => {
    if (monteCarloHistogram.length === 0) return null;
    
    // Erstelle Array aller Akkumulationen (mit Wiederholungen)
    const allAccumulations: number[] = [];
    monteCarloHistogram.forEach(({ acc, count }) => {
      for (let i = 0; i < count; i++) {
        allAccumulations.push(acc);
      }
    });
    
    // Sortiere für Perzentilberechnung
    allAccumulations.sort((a, b) => a - b);
    
    const total = allAccumulations.length;
    const getPercentile = (p: number) => {
      const index = Math.ceil((p / 100) * total) - 1;
      return allAccumulations[Math.max(0, Math.min(index, total - 1))];
    };
    
    return {
      p95: getPercentile(95),
      p85: getPercentile(85),
      p75: getPercentile(75),
      p50: getPercentile(50)
    };
  }, [monteCarloHistogram]);

  // Hilfsfunktion für Label-Offset (unused variables removed)

  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <h1>Monte Carlo Prognose</h1>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', gap: 32, width: '100%', maxWidth: 900 }}>
        <div style={{ width: 350, margin: '2rem 0' }}>
          <label htmlFor="number-list" style={{ fontWeight: 500, marginBottom: 8, display: 'block' }}>
            Bisher erledigte Story Points pro Sprint:
          </label>
          <input
            id="number-list"
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="z.B. 12, 15 18, 20"
            style={{ width: '100%', padding: 8, fontSize: 16, marginBottom: 12 }}
          />
          <div style={{ marginTop: 12 }}>
            <strong>Erkannte Werte:</strong>
            <span style={{ marginLeft: 8 }}>
              {values.length === 0
                ? <span style={{ color: '#888' }}>Keine gültigen Zahlen erkannt</span>
                : values.join(', ')
              }
            </span>
          </div>
          <div style={{ marginTop: 32 }}>
            <label htmlFor="remaining-work" style={{ fontWeight: 500, marginBottom: 8, display: 'block' }}>
              Offene Story Points:
            </label>
            <input
              id="remaining-work"
              type="number"
              value={remaining}
              onChange={e => setRemaining(e.target.value)}
              placeholder="z.B. 42"
              style={{ width: '100%', padding: 8, fontSize: 16, marginBottom: 8 }}
            />
            <div style={{ marginTop: 8 }}>
              <strong>Wert:</strong>
              <span style={{ marginLeft: 8 }}>
                {remaining === "" || isNaN(remainingValue)
                  ? <span style={{ color: '#888' }}>Keine gültige Zahl erkannt</span>
                  : remainingValue
                }
              </span>
            </div>
          </div>
        </div>
        {values.length > 0 && (
          <div style={{ flex: 1, minWidth: 300, maxWidth: 500, margin: '2rem 0' }}>
            <strong>Storypoints / Sprint:</strong>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData} margin={{ top: 20, right: 40, left: 80, bottom: 60 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="x" interval={0} tick={{ fontSize: 14 }}>
                  <Label value="Sprint" position="bottom" offset={20} style={{ fontSize: 16 }} />
                </XAxis>
                <YAxis tick={{ fontSize: 14 }}>
                  <Label value="Storypoints" angle={-90} position="left" offset={30} style={{ fontSize: 16 }} />
                </YAxis>
                <Tooltip />
                <Line type="monotone" dataKey="y" stroke="#8884d8" dot />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
      {/* Prognose-Bereich */}
      <div style={{ width: '100%', maxWidth: 900, marginTop: 32 }}>
        <h2 style={{ margin: '0 0 12px 0', fontSize: 22, fontWeight: 600, letterSpacing: 0.2 }}>Prognose</h2>
        {values.length === 0 ? (
          <div style={{ color: '#888', fontSize: 16 }}>Keine Werte vorhanden.</div>
        ) : (
          <>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: 17, display: 'flex', flexWrap: 'wrap', gap: '24px 40px' }}>
              <li>Anzahl Werte: <strong>{values.length}</strong></li>
              <li>Mittelwert: <strong>{(values.reduce((a, b) => a + b, 0) / values.length).toFixed(2)}</strong></li>
              <li>Minimum: <strong>{Math.min(...values)}</strong></li>
              <li>Maximum: <strong>{Math.max(...values)}</strong></li>
            </ul>
            {Number.isFinite(remainingValue) && remainingValue > 0 && (
              <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', fontSize: 17, display: 'flex', flexWrap: 'wrap', gap: '24px 40px' }}>
                <li>Noch benötigte Sprints:</li>
                <li>Avg. Case: <strong>{(remainingValue / (values.reduce((a, b) => a + b, 0) / values.length)).toFixed(1)}</strong></li>
                <li>Best Case: <strong>{(remainingValue / Math.max(...values)).toFixed(1)}</strong></li>
                <li>Worst Case: <strong>{(remainingValue / Math.min(...values)).toFixed(1)}</strong></li>
              </ul>
            )}
            {/* Monte-Carlo-Histogramm */}
            {monteCarloHistogram.length > 0 && (
               <div style={{ marginTop: 32 }}>
                 <div style={{ display: 'flex', alignItems: 'flex-start', gap: 32 }}>
                   <div style={{ flex: 1 }}>
                     <strong>Monte-Carlo-Prognose (Histogramm):</strong>
                     <ResponsiveContainer width="100%" height={260}>
                       <BarChart data={monteCarloHistogram} margin={{ top: 20, right: 40, left: 80, bottom: 60 }}>
                         <CartesianGrid strokeDasharray="3 3" />
                         <XAxis dataKey="acc" interval={0} tick={{ fontSize: 14 }}>
                           <Label value="Akkumulationen" position="bottom" offset={20} style={{ fontSize: 16 }} />
                         </XAxis>
                         <YAxis tick={{ fontSize: 14 }}>
                           <Label value="Häufigkeit" angle={-90} position="left" offset={30} style={{ fontSize: 16 }} />
                         </YAxis>
                         <Tooltip />
                         <Bar dataKey="count" fill="#82ca9d" />
                       </BarChart>
                     </ResponsiveContainer>
                   </div>
                   {percentiles && (
                     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', minWidth: 180, marginTop: 6 }}>
                       <strong style={{ marginBottom: 12 }}>Simulations-Perzentile:</strong>
                       <div style={{ fontSize: 15, lineHeight: 1.6 }}>
                         <div>95%: <strong>{percentiles.p95}</strong> Sprints</div>
                         <div>85%: <strong>{percentiles.p85}</strong> Sprints</div>
                         <div>75%: <strong>{percentiles.p75}</strong> Sprints</div>
                         <div>50%: <strong>{percentiles.p50}</strong> Sprints</div>
                       </div>
                     </div>
                   )}
                 </div>
                 <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
                   <label htmlFor="iterations-input" style={{ fontWeight: 500 }}>Anzahl Iterationen:</label>
                   <input
                     id="iterations-input"
                     type="number"
                     min={100}
                     max={1000000}
                     step={100}
                     value={iterationsInput}
                     onChange={e => setIterationsInput(e.target.value)}
                     style={{ width: 120, padding: 6, fontSize: 15 }}
                   />
                   <span style={{ fontSize: 12, color: '#888' }}>
                     (100 bis 1.000.000)
                   </span>
                 </div>
                </div>
             )}
          </>
        )}
      </div>
    </main>
  );
};

export default Home; 