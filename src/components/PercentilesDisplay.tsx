import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface PercentilesDisplayProps {
  percentiles: {
    p95: number;
    p85: number;
    p75: number;
    p50: number;
  } | null;
}

const PercentilesDisplay: React.FC<PercentilesDisplayProps> = ({ percentiles }) => {
  const { t } = useLanguage();

  if (!percentiles) {
    return null;
  }

  return (
    <div className="percentiles-section" style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      minWidth: '180px',
      maxWidth: '300px',
      width: '100%',
      padding: '0 0.5rem'
    }}>
      <strong style={{ marginBottom: 12 }}>{t('percentiles.title')}</strong>
      <div style={{ 
        fontSize: 15, 
        lineHeight: 1.6,
        textAlign: 'center'
      }}>
        <div>{t('percentiles.p95')} <strong>{percentiles.p95}</strong> {t('percentiles.sprints')}</div>
        <div>{t('percentiles.p85')} <strong>{percentiles.p85}</strong> {t('percentiles.sprints')}</div>
        <div>{t('percentiles.p75')} <strong>{percentiles.p75}</strong> {t('percentiles.sprints')}</div>
        <div>{t('percentiles.p50')} <strong>{percentiles.p50}</strong> {t('percentiles.sprints')}</div>
      </div>
    </div>
  );
};

export default PercentilesDisplay; 