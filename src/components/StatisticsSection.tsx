import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface StatisticsSectionProps {
  values: number[];
  remainingValue: number;
}

const StatisticsSection: React.FC<StatisticsSectionProps> = ({ values, remainingValue }) => {
  const { t } = useLanguage();

  if (values.length === 0) {
    return (
      <div style={{ 
        width: '100%', 
        maxWidth: '900px', 
        marginTop: 16,
        padding: '0 1rem'
      }}>
        <h2 style={{ margin: '0 0 12px 0', fontSize: 22, fontWeight: 600, letterSpacing: 0.2 }}>{t('statistics.title')}</h2>
        <div style={{ color: '#888', fontSize: 16 }}>{t('statistics.no-values')}</div>
      </div>
    );
  }

  const mean = values.reduce((a, b) => a + b, 0) / values.length;

  return (
    <div style={{ 
      width: '100%', 
      maxWidth: '900px', 
      marginTop: 16,
      padding: '0 1rem'
    }}>
      <h2 style={{ margin: '0 0 12px 0', fontSize: 22, fontWeight: 600, letterSpacing: 0.2 }}>{t('statistics.title')}</h2>
      {Number.isFinite(remainingValue) && remainingValue > 0 ? (
        <ul style={{ 
          listStyle: 'none', 
          padding: 0, 
          margin: 0, 
          fontSize: 17, 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '24px 40px',
          justifyContent: 'center'
        }}>
          <li>{t('statistics.avg-case')} <strong>{Math.round(remainingValue / mean)}</strong></li>
          <li>{t('statistics.best-case')} <strong>{Math.round(remainingValue / Math.max(...values))}</strong></li>
          <li>{t('statistics.worst-case')} <strong>{Math.round(remainingValue / Math.min(...values))}</strong></li>
        </ul>
      ) : (
        <div style={{ color: '#888', fontSize: 16 }}>{t('statistics.no-remaining')}</div>
      )}
    </div>
  );
};

export default StatisticsSection; 