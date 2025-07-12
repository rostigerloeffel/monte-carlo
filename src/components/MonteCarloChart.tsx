import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Label } from 'recharts';
import { useLanguage } from '../context/LanguageContext';

interface MonteCarloChartProps {
  monteCarloHistogram: Array<{ acc: number; count: number }>;
}

const MonteCarloChart: React.FC<MonteCarloChartProps> = ({
  monteCarloHistogram
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
            <BarChart data={monteCarloHistogram} margin={{ top: 20, right: 20, left: 40, bottom: 30 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="acc" interval={0} tick={{ fontSize: 12 }}>
                <Label value={t('chart.monte-carlo.x-axis')} position="bottom" offset={10} style={{ fontSize: 14 }} />
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
    </div>
  );
};

export default MonteCarloChart; 