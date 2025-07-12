import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Label } from 'recharts';

interface StoryPointsChartProps {
  values: number[];
}

const StoryPointsChart: React.FC<StoryPointsChartProps> = ({ values }) => {
  // Daten für das Diagramm: x = Position (ab 1), y = Wert
  const chartData = values.map((y, i) => ({ x: i + 1, y }));

  if (values.length === 0) {
    return null;
  }

  return (
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
  );
};

export default StoryPointsChart; 