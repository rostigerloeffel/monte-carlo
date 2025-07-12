import React, { useState } from "react";
import InputSection from "./components/InputSection";
import StoryPointsChart from "./components/StoryPointsChart";
import StatisticsSection from "./components/StatisticsSection";
import MonteCarloChart from "./components/MonteCarloChart";
import PercentilesDisplay from "./components/PercentilesDisplay";
import IntegrationSection from "./components/IntegrationSection";
import { parseNumbers, calculateMonteCarloHistogram, calculatePercentiles } from "./utils/monteCarlo";
import { useLanguage } from "./context/LanguageContext";

const Home: React.FC = () => {
  const { t } = useLanguage();
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
    <main className="container" style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh',
      width: '100%',
      maxWidth: '100vw',
      overflowX: 'hidden'
    }}>
      <h1>{t('monte-carlo.title')}</h1>
      
      <div className="flex-responsive" style={{ 
        width: '100%', 
        maxWidth: '900px'
      }}>
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
        <div style={{ width: '100%', maxWidth: '900px' }}>
          <div className="flex-responsive">
            <MonteCarloChart
              monteCarloHistogram={monteCarloHistogram}
              iterationsInput={iterationsInput}
              setIterationsInput={setIterationsInput}
            />
            <PercentilesDisplay percentiles={percentiles} />
          </div>
        </div>
      )}
      
      <IntegrationSection />
    </main>
  );
};

export default Home; 