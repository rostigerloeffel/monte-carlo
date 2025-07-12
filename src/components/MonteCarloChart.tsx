import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Label } from 'recharts';

interface MonteCarloChartProps {
  monteCarloHistogram: Array<{ acc: number; count: number }>;
  iterationsInput: string;
  setIterationsInput: (value: string) => void;
}

const MonteCarloChart: React.FC<MonteCarloChartProps> = ({
  monteCarloHistogram,
  iterationsInput,
  setIterationsInput
}) => {
  if (monteCarloHistogram.length === 0) {
    return null;
  }

  return (
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
  );
};

export default MonteCarloChart; 