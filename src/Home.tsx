import React, { useState } from "react";
import InputSection from "./components/InputSection";
import StoryPointsChart from "./components/StoryPointsChart";
import StatisticsSection from "./components/StatisticsSection";
import MonteCarloChart from "./components/MonteCarloChart";
import PercentilesDisplay from "./components/PercentilesDisplay";
import IntegrationSection from "./components/IntegrationSection";
import { parseNumbers, calculateMonteCarloHistogram, calculatePercentiles } from "./utils/monteCarlo";
import { useLanguage } from "./context/LanguageContext";

interface HomeProps {
  input?: string;
  setInput?: (value: string) => void;
  remaining?: string;
  setRemaining?: (value: string) => void;
}

const Home: React.FC<HomeProps> = ({ 
  input: externalInput, 
  setInput: externalSetInput, 
  remaining: externalRemaining, 
  setRemaining: externalSetRemaining 
}) => {
  const { t } = useLanguage();
  const [internalInput, setInternalInput] = useState("");
  const [internalRemaining, setInternalRemaining] = useState("");
  
  // Verwende externe oder interne State
  const input = externalInput !== undefined ? externalInput : internalInput;
  const setInput = externalSetInput || setInternalInput;
  const remaining = externalRemaining !== undefined ? externalRemaining : internalRemaining;
  const setRemaining = externalSetRemaining || setInternalRemaining;
  
  const values = parseNumbers(input);
  const remainingValue = Number(remaining);
  const iterations = 10000; // Fixed value

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
      minHeight: '100%',
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
        />
        <StoryPointsChart values={values} />
      </div>
      
      <div style={{ marginBottom: '2rem' }}>
        <StatisticsSection values={values} remainingValue={remainingValue} />
      </div>
      
      {monteCarloHistogram.length > 0 && (
        <div style={{ width: '100%', maxWidth: '900px' }}>
          <div className="flex-responsive">
            <MonteCarloChart
              monteCarloHistogram={monteCarloHistogram}
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