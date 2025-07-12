import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface InputSectionProps {
  input: string;
  setInput: (value: string) => void;
  remaining: string;
  setRemaining: (value: string) => void;
  values: number[];
  remainingValue: number;
}

const InputSection: React.FC<InputSectionProps> = ({
  input,
  setInput,
  remaining,
  setRemaining,
  values,
  remainingValue
}) => {
  const { t } = useLanguage();

  return (
    <div style={{ 
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
        style={{ 
          width: '100%', 
          padding: 8, 
          fontSize: 16, 
          marginBottom: 12,
          boxSizing: 'border-box'
        }}
      />
      <div style={{ marginTop: 8 }}>
        <strong>{t('input.story-points.detected')}</strong>
        <span style={{ marginLeft: 8 }}>
          {values.length === 0
            ? <span style={{ color: '#888' }}>{t('input.story-points.none')}</span>
            : values.join(', ')
          }
        </span>
      </div>
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
          style={{ 
            width: '100%', 
            padding: 8, 
            fontSize: 16, 
            marginBottom: 8,
            boxSizing: 'border-box'
          }}
        />
        <div style={{ marginTop: 8 }}>
          <strong>{t('input.remaining.value')}</strong>
          <span style={{ marginLeft: 8 }}>
            {remaining === "" || isNaN(remainingValue)
              ? <span style={{ color: '#888' }}>{t('input.remaining.none')}</span>
              : remainingValue
            }
          </span>
        </div>
      </div>
    </div>
  );
};

export default InputSection; 