import React from 'react';

interface PercentilesDisplayProps {
  percentiles: {
    p95: number;
    p85: number;
    p75: number;
    p50: number;
  } | null;
}

const PercentilesDisplay: React.FC<PercentilesDisplayProps> = ({ percentiles }) => {
  if (!percentiles) {
    return null;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', minWidth: 180, marginTop: 6 }}>
      <strong style={{ marginBottom: 12 }}>Simulations-Perzentile:</strong>
      <div style={{ fontSize: 15, lineHeight: 1.6 }}>
        <div>95%: <strong>{percentiles.p95}</strong> Sprints</div>
        <div>85%: <strong>{percentiles.p85}</strong> Sprints</div>
        <div>75%: <strong>{percentiles.p75}</strong> Sprints</div>
        <div>50%: <strong>{percentiles.p50}</strong> Sprints</div>
      </div>
    </div>
  );
};

export default PercentilesDisplay; 