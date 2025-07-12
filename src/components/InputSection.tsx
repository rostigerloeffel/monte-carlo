import React, { useMemo, useCallback } from 'react';
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

  // Calculate basic statistics with useMemo
  const statistics = useMemo(() => {
    if (values.length === 0) {
      return { mean: 0, min: 0, max: 0 };
    }
    const mean = values.reduce((a, b) => a + b, 0) / values.length;
    const min = Math.min(...values);
    const max = Math.max(...values);
    return { mean, min, max };
  }, [values]);

  // Event handlers with useCallback
  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }, [setInput]);

  const handleRemainingChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setRemaining(e.target.value);
  }, [setRemaining]);

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
        onChange={handleInputChange}
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
              {t('statistics.mean')} <strong>{statistics.mean.toFixed(2)}</strong>
            </div>
            <div>
              {t('statistics.min')} <strong>{statistics.min}</strong>
            </div>
            <div>
              {t('statistics.max')} <strong>{statistics.max}</strong>
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
          onChange={handleRemainingChange}
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