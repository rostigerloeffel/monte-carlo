import React, { useState } from "react";
import InputSection from "./components/InputSection";
import StoryPointsChart from "./components/StoryPointsChart";
import StatisticsSection from "./components/StatisticsSection";
import MonteCarloChart from "./components/MonteCarloChart";
import PercentilesDisplay from "./components/PercentilesDisplay";
import { parseNumbers, calculateMonteCarloHistogram, calculatePercentiles } from "./utils/monteCarlo";

const Home: React.FC = () => {
  const [input, setInput] = useState("");
  const values = parseNumbers(input);
  const [remaining, setRemaining] = useState("");
  const remainingValue = Number(remaining);
  const [iterationsInput, setIterationsInput] = useState("10000");
  const iterations = Math.max(100, Math.min(1000000, Number(iterationsInput) || 10000));

  // Monte-Carlo-Prognose
  const monteCarloHistogram = React.useMemo(() => {
    return calculateMonteCarloHistogram(values, remainingValue, iterations);
  }, [values, remainingValue, iterations]);

  // Berechne Perzentile aus den Simulationsdaten
  const percentiles = React.useMemo(() => {
    return calculatePercentiles(monteCarloHistogram);
  }, [monteCarloHistogram]);

  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <h1>Monte Carlo Prognose</h1>
      
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', gap: 32, width: '100%', maxWidth: 900 }}>
        <InputSection
          input={input}
          setInput={setInput}
          remaining={remaining}
          setRemaining={setRemaining}
          values={values}
          remainingValue={remainingValue}
        />
        <StoryPointsChart values={values} />
      </div>
      
      <StatisticsSection values={values} remainingValue={remainingValue} />
      
      {monteCarloHistogram.length > 0 && (
        <div style={{ width: '100%', maxWidth: 900 }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 32 }}>
            <MonteCarloChart
              monteCarloHistogram={monteCarloHistogram}
              iterationsInput={iterationsInput}
              setIterationsInput={setIterationsInput}
            />
            <PercentilesDisplay percentiles={percentiles} />
          </div>
        </div>
      )}
    </main>
  );
};

export default Home; 