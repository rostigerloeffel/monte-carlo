import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Label } from 'recharts';
import { useLanguage } from '../context/LanguageContext';

interface StoryPointsChartProps {
  values: number[];
}

const StoryPointsChart: React.FC<StoryPointsChartProps> = ({ values }) => {
  const { t } = useLanguage();
  
  // Daten für das Diagramm: x = Position (ab 1), y = Wert
  const chartData = values.map((y, i) => ({ x: i + 1, y }));

  if (values.length === 0) {
    return null;
  }

  return (
    <div style={{ flex: 1, minWidth: 300, maxWidth: 500, margin: '1rem 0' }}>
      <strong>{t('chart.story-points.title')}</strong>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData} margin={{ top: 20, right: 40, left: 80, bottom: 60 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" interval={0} tick={{ fontSize: 14 }}>
            <Label value={t('chart.story-points.x-axis')} position="bottom" offset={20} style={{ fontSize: 16 }} />
          </XAxis>
          <YAxis tick={{ fontSize: 14 }}>
            <Label value={t('chart.story-points.y-axis')} angle={-90} position="left" offset={30} style={{ fontSize: 16 }} />
          </YAxis>
          <Tooltip />
          <Line type="monotone" dataKey="y" stroke="#8884d8" dot />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StoryPointsChart; 