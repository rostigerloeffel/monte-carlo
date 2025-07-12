import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Label } from 'recharts';
import { useLanguage } from '../context/LanguageContext';

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
  const { t } = useLanguage();

  if (monteCarloHistogram.length === 0) {
    return null;
  }

  return (
    <div style={{ 
      marginTop: 16,
      width: '100%',
      maxWidth: '500px',
      minWidth: '280px'
    }}>
      <div style={{ 
        display: 'flex', 
        alignItems: 'flex-start', 
        gap: '2rem',
        flexDirection: 'column'
      }}>
        <div style={{ flex: 1, width: '100%' }}>
          <strong>{t('chart.monte-carlo.title')}</strong>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={monteCarloHistogram} margin={{ top: 20, right: 20, left: 40, bottom: 60 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="acc" interval={0} tick={{ fontSize: 12 }}>
                <Label value={t('chart.monte-carlo.x-axis')} position="bottom" offset={20} style={{ fontSize: 14 }} />
              </XAxis>
              <YAxis tick={{ fontSize: 12 }}>
                <Label value={t('chart.monte-carlo.y-axis')} angle={-90} position="left" offset={20} style={{ fontSize: 14 }} />
              </YAxis>
              <Tooltip />
              <Bar dataKey="count" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div style={{ 
        marginTop: 12, 
        display: 'flex', 
        alignItems: 'center', 
        gap: 12,
        flexWrap: 'wrap'
      }}>
        <label htmlFor="iterations-input" style={{ fontWeight: 500 }}>{t('chart.monte-carlo.iterations.label')}</label>
        <input
          id="iterations-input"
          type="number"
          min={100}
          max={1000000}
          step={100}
          value={iterationsInput}
          onChange={e => setIterationsInput(e.target.value)}
          title={t('chart.monte-carlo.iterations.tooltip')}
          style={{ 
            width: 120, 
            padding: 6, 
            fontSize: 15,
            boxSizing: 'border-box'
          }}
        />
        <span style={{ fontSize: 12, color: '#888' }}>
          {t('chart.monte-carlo.iterations.range')}
        </span>
      </div>
    </div>
  );
};

export default MonteCarloChart; 