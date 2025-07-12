import React from 'react';

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
  return (
    <div style={{ width: 350, margin: '1rem 0' }}>
      <label htmlFor="number-list" style={{ fontWeight: 500, marginBottom: 8, display: 'block' }}>
        Bisher erledigte Story Points pro Sprint:
      </label>
      <input
        id="number-list"
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="z.B. 12, 15 18, 20"
        style={{ width: '100%', padding: 8, fontSize: 16, marginBottom: 12 }}
      />
      <div style={{ marginTop: 8 }}>
        <strong>Erkannte Werte:</strong>
        <span style={{ marginLeft: 8 }}>
          {values.length === 0
            ? <span style={{ color: '#888' }}>Keine gültigen Zahlen erkannt</span>
            : values.join(', ')
          }
        </span>
      </div>
      <div style={{ marginTop: 16 }}>
        <label htmlFor="remaining-work" style={{ fontWeight: 500, marginBottom: 8, display: 'block' }}>
          Offene Story Points:
        </label>
        <input
          id="remaining-work"
          type="number"
          value={remaining}
          onChange={e => setRemaining(e.target.value)}
          placeholder="z.B. 42"
          style={{ width: '100%', padding: 8, fontSize: 16, marginBottom: 8 }}
        />
        <div style={{ marginTop: 8 }}>
          <strong>Wert:</strong>
          <span style={{ marginLeft: 8 }}>
            {remaining === "" || isNaN(remainingValue)
              ? <span style={{ color: '#888' }}>Keine gültige Zahl erkannt</span>
              : remainingValue
            }
          </span>
        </div>
      </div>
    </div>
  );
};

export default InputSection; 