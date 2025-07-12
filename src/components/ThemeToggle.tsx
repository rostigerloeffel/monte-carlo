import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

const ThemeToggle: React.FC = () => {
  const { theme, setThemeDirect } = useTheme();
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getThemeIcon = (currentTheme: string) => {
    switch (currentTheme) {
      case 'light':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM8.166 17.834a.75.75 0 001.06 1.06l1.591-1.59a.75.75 0 10-1.06-1.061l-1.591 1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.166 8.166a.75.75 0 001.06-1.06L5.636 5.515a.75.75 0 00-1.061 1.06l1.59 1.591z" fill="currentColor"/>
          </svg>
        );
      case 'dark':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" fill="currentColor"/>
          </svg>
        );
      case 'system':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2v12h16V4H4zm2 4h12v2H6V6zm0 4h8v2H6v-2z" fill="currentColor"/>
          </svg>
        );
      default:
        return null;
    }
  };

  const getEffectiveTheme = () => {
    if (theme === 'system') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return theme;
  };

  const containerStyle = {
    position: 'fixed' as const,
    top: 20,
    right: 20,
    zIndex: 1000,
  };

  const buttonStyle = {
    width: 40,
    height: 40,
    borderRadius: '50%',
    border: 'none',
    backgroundColor: getEffectiveTheme() === 'light' ? '#f8f9fa' : '#2d3748',
    color: getEffectiveTheme() === 'light' ? '#4a5568' : '#e2e8f0',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.2s ease',
    fontSize: 16
  };

  const dropdownStyle = {
    position: 'absolute' as const,
    top: '100%',
    right: 0,
    marginTop: 8,
    backgroundColor: getEffectiveTheme() === 'light' ? '#ffffff' : '#2d3748',
    border: `1px solid ${getEffectiveTheme() === 'light' ? '#e2e8f0' : '#4a5568'}`,
    borderRadius: 8,
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    minWidth: 120,
    overflow: 'hidden',
    opacity: isOpen ? 1 : 0,
    visibility: isOpen ? 'visible' as const : 'hidden' as const,
    transform: isOpen ? 'translateY(0)' : 'translateY(-10px)',
    transition: 'all 0.2s ease',
  };

  const optionStyle = {
    padding: '8px 16px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    color: getEffectiveTheme() === 'light' ? '#4a5568' : '#e2e8f0',
    fontSize: 14,
    border: 'none',
    backgroundColor: 'transparent',
    width: '100%',
    textAlign: 'left' as const,
  };

  return (
    <div ref={dropdownRef} style={containerStyle}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={buttonStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
        }}
        title={t('theme.select')}
      >
        {getThemeIcon(theme)}
      </button>
      
      <div style={dropdownStyle}>
        <button
          style={optionStyle}
          onClick={() => {
            setThemeDirect('light');
            setIsOpen(false);
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = getEffectiveTheme() === 'light' ? '#f7fafc' : '#4a5568';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM8.166 17.834a.75.75 0 001.06 1.06l1.591-1.59a.75.75 0 10-1.06-1.061l-1.591 1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.166 8.166a.75.75 0 001.06-1.06L5.636 5.515a.75.75 0 00-1.061 1.06l1.59 1.591z" fill="currentColor"/>
          </svg>
          {t('theme.light')}
        </button>
        
        <button
          style={optionStyle}
          onClick={() => {
            setThemeDirect('dark');
            setIsOpen(false);
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = getEffectiveTheme() === 'light' ? '#f7fafc' : '#4a5568';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" fill="currentColor"/>
          </svg>
          {t('theme.dark')}
        </button>
        
        <button
          style={optionStyle}
          onClick={() => {
            setThemeDirect('system');
            setIsOpen(false);
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = getEffectiveTheme() === 'light' ? '#f7fafc' : '#4a5568';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2v12h16V4H4zm2 4h12v2H6V6zm0 4h8v2H6v-2z" fill="currentColor"/>
          </svg>
          {t('theme.system')}
        </button>
      </div>
    </div>
  );
};

export default ThemeToggle; 