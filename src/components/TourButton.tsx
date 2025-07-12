import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface TourButtonProps {
  onStartTour: () => void;
}

const TourButton: React.FC<TourButtonProps> = ({ onStartTour }) => {
  const { t } = useLanguage();

  return (
    <button
      onClick={onStartTour}
      title={t('tour.start')}
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 100,
        background: 'rgba(0, 82, 204, 0.1)',
        border: '1px solid rgba(0, 82, 204, 0.3)',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        fontSize: '16px',
        color: '#0052CC',
        transition: 'all 0.2s ease',
        backdropFilter: 'blur(10px)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'rgba(0, 82, 204, 0.2)';
        e.currentTarget.style.transform = 'scale(1.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'rgba(0, 82, 204, 0.1)';
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      ?
    </button>
  );
};

export default TourButton; 