import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Tour from 'reactour';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

interface AppTourProps {
  isVisible: boolean;
  onClose: () => void;
  onInputChange?: (input: string, remaining: string) => void;
}

const AppTour: React.FC<AppTourProps> = ({ isVisible, onClose, onInputChange }) => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const [isTourOpen, setIsTourOpen] = useState(false);

  // Get effective theme
  const getEffectiveTheme = (): 'light' | 'dark' => {
    if (theme === 'system') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return theme;
  };

  const effectiveTheme = getEffectiveTheme();

  useEffect(() => {
    if (isVisible) {
      // Längere Verzögerung, um sicherzustellen, dass alle DOM-Elemente gerendert sind
      setTimeout(() => {
        // Überprüfe, ob das Target-Element existiert
        const targetElement = document.querySelector('#number-list');
        if (targetElement) {
          setIsTourOpen(true);
        } else {
          // Falls das Element nicht existiert, versuche es nochmal nach einer weiteren Verzögerung
          setTimeout(() => {
            setIsTourOpen(true);
          }, 300);
        }
      }, 500);
    } else {
      setIsTourOpen(false);
    }
  }, [isVisible]);

  const steps = useMemo(() => [
    {
      selector: '#number-list',
      content: t('tour.step1'),
      action: () => onInputChange?.('3, 6, 6, 3, 8, 8, 7, 13, 2, 5', ''),
    },
    {
      selector: '#input-section',
      content: t('tour.step2'),
      action: () => onInputChange?.('3, 6, 6, 3, 8, 8, 7, 13, 2, 5', '150'),
    },
    {
      selector: '.statistics-section',
      content: t('tour.step3'),
    },
    {
      selector: '.avg-case',
      content: t('tour.step4'),
    },
    {
      selector: '.best-case',
      content: t('tour.step5'),
    },
    {
      selector: '.worst-case',
      content: t('tour.step6'),
    },
    {
      selector: '.percentiles-section',
      content: t('tour.step7'),
    },
    {
      selector: '.integration-section',
      content: t('tour.step8'),
    },
  ], [t, onInputChange]);

  const handleClose = useCallback(() => {
    setIsTourOpen(false);
    // Lösche die Beispielwerte am Ende der Tour
    onInputChange?.('', '');
    onClose();
  }, [onClose, onInputChange]);

  if (!isVisible) return null;

  return (
    <>
      <style>
        {`
          .reactour__helper {
            background-color: ${effectiveTheme === 'dark' ? '#1a1a1a' : '#ffffff'} !important;
            color: ${effectiveTheme === 'dark' ? 'rgba(255, 255, 255, 0.87)' : '#213547'} !important;
            border: 1px solid ${effectiveTheme === 'dark' ? '#404040' : '#e1e5e9'} !important;
          }
          .reactour__helper__content {
            background-color: ${effectiveTheme === 'dark' ? '#1a1a1a' : '#ffffff'} !important;
            color: ${effectiveTheme === 'dark' ? 'rgba(255, 255, 255, 0.87)' : '#213547'} !important;
          }
          .reactour__helper__footer {
            background-color: ${effectiveTheme === 'dark' ? '#1a1a1a' : '#ffffff'} !important;
            color: ${effectiveTheme === 'dark' ? 'rgba(255, 255, 255, 0.87)' : '#213547'} !important;
          }
          .reactour__close {
            color: ${effectiveTheme === 'dark' ? 'rgba(255, 255, 255, 0.87)' : '#213547'} !important;
          }
          .reactour__navigation {
            color: ${effectiveTheme === 'dark' ? 'rgba(255, 255, 255, 0.87)' : '#213547'} !important;
          }
          .reactour__navigation button {
            background-color: ${effectiveTheme === 'dark' ? '#1a1a1a' : '#f9f9f9'} !important;
            color: ${effectiveTheme === 'dark' ? 'rgba(255, 255, 255, 0.87)' : '#213547'} !important;
            border: 1px solid ${effectiveTheme === 'dark' ? '#404040' : '#e1e5e9'} !important;
          }
          .reactour__navigation button:hover {
            background-color: ${effectiveTheme === 'dark' ? '#2a2a2a' : '#f0f0f0'} !important;
          }
        `}
      </style>
      <Tour
        steps={steps}
        isOpen={isTourOpen}
        onRequestClose={handleClose}
        showNavigation={true}
        showNavigationNumber={true}
        showButtons={true}
        showCloseButton={true}
        showBadge={true}
        accentColor="#0052CC"
        inViewThreshold={10}
        scrollDuration={0.5}
        scrollOffset={-100}
        disableInteraction={false}
        disableDotsNavigation={false}
        disableKeyboardNavigation={false}
        closeWithMask={true}
      />
    </>
  );
};

export default AppTour; 