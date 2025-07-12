import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface InputSectionProps {
  input: string;
  setInput: (value: string) => void;
  remaining: string;
  setRemaining: (value: string) => void;
  values: number[];
}

const InputSection: React.FC<InputSectionProps> = ({
  input,
  setInput,
  remaining,
  setRemaining,
  values
}) => {
  const { t } = useLanguage();

  // Calculate basic statistics
  const mean = values.length > 0 ? values.reduce((a, b) => a + b, 0) / values.length : 0;
  const min = values.length > 0 ? Math.min(...values) : 0;
  const max = values.length > 0 ? Math.max(...values) : 0;

  return (
    <div id="input-section" style={{ 
      width: '100%', 
      maxWidth: '350px', 
      minWidth: '280px',
      margin: '1rem 0',
      padding: '0 0.5rem'
    }}>
      <label htmlFor="number-list" style={{ fontWeight: 500, marginBottom: 8, display: 'block' }}>
        {t('input.story-points.label')}
      </label>
      <input
        id="number-list"
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder={t('input.story-points.placeholder')}
        title={t('input.story-points.tooltip')}
        style={{ 
          width: '100%', 
          padding: 8, 
          fontSize: 16, 
          marginBottom: 12,
          boxSizing: 'border-box'
        }}
      />
      
      {/* Basic Statistics directly under input */}
      {values.length > 0 && (
        <div style={{ 
          marginTop: 8,
          fontSize: 13,
          color: '#666'
        }}>
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '16px 24px'
          }}>
            <div>
              {t('statistics.values-count')} <strong>{values.length}</strong>
            </div>
            <div>
              {t('statistics.mean')} <strong>{mean.toFixed(2)}</strong>
            </div>
            <div>
              {t('statistics.min')} <strong>{min}</strong>
            </div>
            <div>
              {t('statistics.max')} <strong>{max}</strong>
            </div>
          </div>
        </div>
      )}
      
      <div style={{ marginTop: 16 }}>
        <label htmlFor="remaining-work" style={{ fontWeight: 500, marginBottom: 8, display: 'block' }}>
          {t('input.remaining.label')}
        </label>
        <input
          id="remaining-work"
          type="number"
          value={remaining}
          onChange={e => setRemaining(e.target.value)}
          placeholder={t('input.remaining.placeholder')}
          title={t('input.remaining.tooltip')}
          style={{ 
            width: '100%', 
            padding: 8, 
            fontSize: 16, 
            marginBottom: 8,
            boxSizing: 'border-box'
          }}
        />
      </div>
    </div>
  );
};

export default InputSection; 