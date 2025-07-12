import React, { useCallback } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface TourButtonProps {
  onStartTour: () => void;
}

const TourButton: React.FC<TourButtonProps> = ({ onStartTour }) => {
  const { t } = useLanguage();

  const handleClick = useCallback(() => {
    onStartTour();
  }, [onStartTour]);

  const handleMouseEnter = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.background = 'rgba(0, 82, 204, 0.2)';
    e.currentTarget.style.transform = 'scale(1.1)';
  }, []);

  const handleMouseLeave = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.background = 'rgba(0, 82, 204, 0.1)';
    e.currentTarget.style.transform = 'scale(1)';
  }, []);

  return (
    <button
      onClick={handleClick}
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
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      ?
    </button>
  );
};

export default TourButton; 