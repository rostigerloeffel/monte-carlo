import React from 'react';

interface StatisticsSectionProps {
  values: number[];
  remainingValue: number;
}

const StatisticsSection: React.FC<StatisticsSectionProps> = ({ values, remainingValue }) => {
  if (values.length === 0) {
    return (
      <div style={{ width: '100%', maxWidth: 900, marginTop: 16 }}>
        <h2 style={{ margin: '0 0 12px 0', fontSize: 22, fontWeight: 600, letterSpacing: 0.2 }}>Prognose</h2>
        <div style={{ color: '#888', fontSize: 16 }}>Keine Werte vorhanden.</div>
      </div>
    );
  }

  const mean = values.reduce((a, b) => a + b, 0) / values.length;
  const min = Math.min(...values);
  const max = Math.max(...values);

  return (
    <div style={{ width: '100%', maxWidth: 900, marginTop: 16 }}>
      <h2 style={{ margin: '0 0 12px 0', fontSize: 22, fontWeight: 600, letterSpacing: 0.2 }}>Prognose</h2>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: 17, display: 'flex', flexWrap: 'wrap', gap: '24px 40px' }}>
        <li>Anzahl Werte: <strong>{values.length}</strong></li>
        <li>Mittelwert: <strong>{mean.toFixed(2)}</strong></li>
        <li>Minimum: <strong>{min}</strong></li>
        <li>Maximum: <strong>{max}</strong></li>
      </ul>
      {Number.isFinite(remainingValue) && remainingValue > 0 && (
        <ul style={{ listStyle: 'none', padding: 0, margin: '12px 0 0 0', fontSize: 17, display: 'flex', flexWrap: 'wrap', gap: '24px 40px' }}>
          <li>Noch benötigte Sprints:</li>
          <li>Avg. Case: <strong>{(remainingValue / mean).toFixed(1)}</strong></li>
          <li>Best Case: <strong>{(remainingValue / max).toFixed(1)}</strong></li>
          <li>Worst Case: <strong>{(remainingValue / min).toFixed(1)}</strong></li>
        </ul>
      )}
    </div>
  );
};

export default StatisticsSection; 