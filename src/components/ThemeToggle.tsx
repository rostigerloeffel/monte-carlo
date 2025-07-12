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
          <svg width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor" style={{ minWidth: '20px', minHeight: '20px' }}>
            <circle cx="12" cy="12" r="5" fill="currentColor"/>
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        );
      case 'dark':
        return (
          <svg width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor" style={{ minWidth: '20px', minHeight: '20px' }}>
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="currentColor"/>
          </svg>
        );
      case 'system':
        return (
          <svg width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor" style={{ minWidth: '20px', minHeight: '20px' }}>
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" fill="none" stroke="currentColor" strokeWidth="2"/>
            <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="2"/>
            <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="2"/>
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
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
            <circle cx="12" cy="12" r="5" fill="currentColor"/>
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
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
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="currentColor"/>
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
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" fill="none" stroke="currentColor" strokeWidth="2"/>
            <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="2"/>
            <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="2"/>
          </svg>
          {t('theme.system')}
        </button>
      </div>
    </div>
  );
};

export default ThemeToggle; 