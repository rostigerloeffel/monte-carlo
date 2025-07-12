import React, { useState, useEffect } from 'react';
import Joyride, { STATUS } from 'react-joyride';
import type { Step, CallBackProps } from 'react-joyride';
import { useLanguage } from '../context/LanguageContext';

interface AppTourProps {
  isVisible: boolean;
  onClose: () => void;
  onInputChange?: (input: string, remaining: string) => void;
}

const AppTour: React.FC<AppTourProps> = ({ isVisible, onClose, onInputChange }) => {
  const { t } = useLanguage();
  const [run, setRun] = useState(false);

  useEffect(() => {
    if (isVisible) {
      // Verzögerung, um sicherzustellen, dass das Element gerendert ist
      setTimeout(() => {
        setRun(true);
      }, 100);
    }
  }, [isVisible]);

  const steps: Step[] = [
    {
      target: '#number-list',
      content: t('tour.step1'),
      placement: 'bottom'
    },
    {
      target: '#input-section',
      content: t('tour.step2'),
      placement: 'bottom'
    },
    {
      target: '.statistics-section',
      content: t('tour.step3'),
      placement: 'top',
    },
    {
      target: '.avg-case',
      content: t('tour.step4'),
      placement: 'top',
    },
    {
      target: '.best-case',
      content: t('tour.step5'),
      placement: 'top',
    },
    {
      target: '.worst-case',
      content: t('tour.step6'),
      placement: 'top',
    },
    {
      target: '.percentiles-section',
      content: t('tour.step7'),
      placement: 'left',
    },
    {
      target: '.integration-section',
      content: t('tour.step8'),
      placement: 'top',
    },
  ];

  const handleCallback = (data: CallBackProps) => {
    const { status, index } = data;
    
    // Setze Beispielwerte während der Tour
    if (index === 0 && status === STATUS.RUNNING) {
      // Erste Eingabe: Story Points
      onInputChange?.('3, 6, 6, 3, 8, 8, 7, 13, 2, 5', '');
    } else if (index === 1 && status === STATUS.RUNNING) {
      // Zweite Eingabe: Verbleibende Story Points
      onInputChange?.('3, 6, 6, 3, 8, 8, 7, 13, 2, 5', '150');
    }
    
    if (status === STATUS.FINISHED || status === STATUS.SKIPPED) {
      // Lösche die Beispielwerte am Ende der Tour
      onInputChange?.('', '');
      setRun(false);
      onClose();
    }
  };

  if (!isVisible) return null;

  return (
    <Joyride
      steps={steps}
      run={run}
      continuous
      showProgress
      showSkipButton
      callback={handleCallback}
      styles={{
        options: {
          primaryColor: '#0052CC',
          zIndex: 1000,
        },
        tooltip: {
          fontSize: 14,
        },
        buttonNext: {
          backgroundColor: '#0052CC',
        },
        buttonBack: {
          marginRight: 10,
        },
        buttonSkip: {
          color: '#666',
        },
      }}
      locale={{
        back: t('tour.back'),
        close: t('tour.close'),
        last: t('tour.finish'),
        next: t('tour.next'),
        skip: t('tour.skip'),
      }}
    />
  );
};

export default AppTour; 