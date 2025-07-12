import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
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

  const getLanguageIcon = (lang: string) => {
    switch (lang) {
      case 'de':
        return (
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
            <rect width="16" height="4" fill="#FFCE00"/>
            <rect y="4" width="16" height="4" fill="#D00"/>
            <rect y="8" width="16" height="4" fill="#000"/>
          </svg>
        );
      case 'en':
        return (
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
            <rect width="16" height="12" fill="#012169"/>
            <path d="M0 0L16 12M16 0L0 12" stroke="#FFF" strokeWidth="1"/>
            <path d="M0 0L16 12M16 0L0 12" stroke="#C8102E" strokeWidth="0.5"/>
            <path d="M8 0V12M0 6H16" stroke="#FFF" strokeWidth="1"/>
            <path d="M8 0V12M0 6H16" stroke="#C8102E" strokeWidth="0.5"/>
          </svg>
        );
      default:
        return (
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
            <rect width="16" height="12" fill="#4A90E2"/>
            <circle cx="8" cy="6" r="2" fill="#FFF"/>
          </svg>
        );
    }
  };

  const containerStyle = {
    position: 'fixed' as const,
    top: 20,
    right: 80, // Position next to theme toggle
    zIndex: 1000,
  };

  const buttonStyle = {
    width: 40,
    height: 40,
    borderRadius: '50%',
    border: 'none',
    backgroundColor: '#f8f9fa',
    color: '#4a5568',
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
    backgroundColor: '#ffffff',
    border: '1px solid #e2e8f0',
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
    color: '#4a5568',
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
        title={t('language.select')}
      >
        {getLanguageIcon(language)}
      </button>
      
      <div style={dropdownStyle}>
        <button
          style={optionStyle}
          onClick={() => {
            setLanguage('de');
            setIsOpen(false);
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#f7fafc';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
        >
          {getLanguageIcon('de')} {t('language.german')}
        </button>
        
        <button
          style={optionStyle}
          onClick={() => {
            setLanguage('en');
            setIsOpen(false);
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#f7fafc';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
        >
          {getLanguageIcon('en')} {t('language.english')}
        </button>
      </div>
    </div>
  );
};

export default LanguageToggle; 