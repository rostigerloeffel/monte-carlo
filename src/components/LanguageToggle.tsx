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
      case 'zh':
        return (
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
            <rect width="16" height="12" fill="#DE2910"/>
            <polygon points="0,0 8,6 0,12" fill="#FFDE00"/>
            <polygon points="8,0 16,6 8,12" fill="#FFDE00"/>
            <circle cx="8" cy="6" r="1" fill="#DE2910"/>
          </svg>
        );
      case 'es':
        return (
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
            <rect width="16" height="6" fill="#FFD100"/>
            <rect y="6" width="16" height="6" fill="#FF0000"/>
            <rect width="16" height="4" fill="#FFD100"/>
            <rect y="8" width="16" height="4" fill="#FF0000"/>
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
      case 'hi':
        return (
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
            <rect width="16" height="4" fill="#FF9933"/>
            <rect y="4" width="16" height="4" fill="#FFFFFF"/>
            <rect y="8" width="16" height="4" fill="#138808"/>
            <circle cx="8" cy="6" r="1" fill="#000080"/>
          </svg>
        );
      case 'de':
        return (
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
            <rect width="16" height="4" fill="#FFCE00"/>
            <rect y="4" width="16" height="4" fill="#D00"/>
            <rect y="8" width="16" height="4" fill="#000"/>
          </svg>
        );
      case 'fr':
        return (
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
            <rect width="5.33" height="12" fill="#002395"/>
            <rect x="5.33" width="5.34" height="12" fill="#FFFFFF"/>
            <rect x="10.67" width="5.33" height="12" fill="#ED2939"/>
          </svg>
        );
      case 'ja':
        return (
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
            <rect width="16" height="12" fill="#FFFFFF"/>
            <circle cx="8" cy="6" r="3" fill="#BC002D"/>
          </svg>
        );
      case 'ko':
        return (
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
            <rect width="16" height="12" fill="#FFFFFF"/>
            <circle cx="8" cy="6" r="2" fill="#CD2E3A"/>
            <path d="M8 2L9 4L11 4L9.5 5.5L10 7.5L8 6.5L6 7.5L6.5 5.5L5 4L7 4L8 2Z" fill="#0047A0"/>
          </svg>
        );
      case 'it':
        return (
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
            <rect width="5.33" height="12" fill="#009246"/>
            <rect x="5.33" width="5.34" height="12" fill="#FFFFFF"/>
            <rect x="10.67" width="5.33" height="12" fill="#CE2B37"/>
          </svg>
        );
      case 'ru':
        return (
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
            <rect width="16" height="4" fill="#FFFFFF"/>
            <rect y="4" width="16" height="4" fill="#0039A6"/>
            <rect y="8" width="16" height="4" fill="#D52B1E"/>
          </svg>
        );
      case 'pt':
        return (
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
            <rect width="16" height="12" fill="#006600"/>
            <circle cx="8" cy="6" r="2" fill="#FFCC00"/>
            <circle cx="8" cy="6" r="1.5" fill="#006600"/>
          </svg>
        );
      case 'tr':
        return (
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
            <rect width="16" height="12" fill="#E30A17"/>
            <circle cx="8" cy="6" r="2" fill="#FFFFFF"/>
            <circle cx="8" cy="6" r="1.5" fill="#E30A17"/>
          </svg>
        );
      case 'bn':
        return (
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
            <rect width="16" height="12" fill="#006A4E"/>
            <circle cx="8" cy="6" r="2" fill="#F42A41"/>
          </svg>
        );
      case 'pa':
        return (
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
            <rect width="16" height="6" fill="#FF9933"/>
            <rect y="6" width="16" height="6" fill="#138808"/>
            <circle cx="8" cy="6" r="1" fill="#000080"/>
          </svg>
        );
      case 'jv':
        return (
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
            <rect width="16" height="12" fill="#FFFFFF"/>
            <rect width="16" height="6" fill="#FF0000"/>
          </svg>
        );
      case 'te':
        return (
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
            <rect width="16" height="4" fill="#FF9933"/>
            <rect y="4" width="16" height="4" fill="#FFFFFF"/>
            <rect y="8" width="16" height="4" fill="#138808"/>
            <circle cx="8" cy="6" r="1" fill="#000080"/>
          </svg>
        );
      case 'mr':
        return (
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
            <rect width="16" height="4" fill="#FF9933"/>
            <rect y="4" width="16" height="4" fill="#FFFFFF"/>
            <rect y="8" width="16" height="4" fill="#138808"/>
            <circle cx="8" cy="6" r="1" fill="#000080"/>
          </svg>
        );
      case 'ta':
        return (
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
            <rect width="16" height="4" fill="#FF9933"/>
            <rect y="4" width="16" height="4" fill="#FFFFFF"/>
            <rect y="8" width="16" height="4" fill="#138808"/>
            <circle cx="8" cy="6" r="1" fill="#000080"/>
          </svg>
        );
      case 'vi':
        return (
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
            <rect width="16" height="12" fill="#DA251D"/>
            <polygon points="8,2 9.5,6 14,6 10.5,9 12,13 8,10 4,13 5.5,9 2,6 6.5,6" fill="#FFFF00"/>
          </svg>
        );
      case 'ur':
        return (
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
            <rect width="16" height="12" fill="#FFFFFF"/>
            <rect width="16" height="4" fill="#01411C"/>
            <rect y="8" width="16" height="4" fill="#01411C"/>
            <circle cx="8" cy="6" r="1" fill="#FFFFFF"/>
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
    minWidth: 200,
    maxHeight: 300,
    overflow: 'auto',
    opacity: isOpen ? 1 : 0,
    visibility: isOpen ? 'visible' as const : 'hidden' as const,
    transform: isOpen ? 'translateY(0)' : 'translateY(-10px)',
    transition: 'all 0.2s ease',
    // Custom scrollbar
    scrollbarWidth: 'thin', // Firefox
    scrollbarColor: '#b3b3b3 #f5f5f5', // Firefox
  } as React.CSSProperties;

  // Custom scrollbar for Webkit browsers
  const customScrollbar = `
    ::-webkit-scrollbar {
      width: 8px;
      background: #f5f5f5;
      border-radius: 8px;
    }
    ::-webkit-scrollbar-thumb {
      background: #b3b3b3;
      border-radius: 8px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #888;
    }
  `;

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

  // Alphabetisch sortiert nach englischem Namen
  const languages = [
    { code: 'bn', name: 'Bengali', nativeName: 'বাংলা' },
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'fr', name: 'French', nativeName: 'Français' },
    { code: 'de', name: 'German', nativeName: 'Deutsch' },
    { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
    { code: 'it', name: 'Italian', nativeName: 'Italiano' },
    { code: 'ja', name: 'Japanese', nativeName: '日本語' },
    { code: 'jv', name: 'Javanese', nativeName: 'Basa Jawa' },
    { code: 'ko', name: 'Korean', nativeName: '한국어' },
    { code: 'mr', name: 'Marathi', nativeName: 'मराठी' },
    { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ' },
    { code: 'pt', name: 'Portuguese', nativeName: 'Português' },
    { code: 'ru', name: 'Russian', nativeName: 'Русский' },
    { code: 'es', name: 'Spanish', nativeName: 'Español' },
    { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
    { code: 'te', name: 'Telugu', nativeName: 'తెలుగు' },
    { code: 'tr', name: 'Turkish', nativeName: 'Türkçe' },
    { code: 'ur', name: 'Urdu', nativeName: 'اردو' },
    { code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt' },
    { code: 'zh', name: 'Chinese', nativeName: '中文' },
  ];

  return (
    <div ref={dropdownRef} style={containerStyle}>
      <style>{customScrollbar}</style>
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
        {languages.map((lang) => (
          <button
            key={lang.code}
            style={optionStyle}
            onClick={() => {
              setLanguage(lang.code as any);
              setIsOpen(false);
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f7fafc';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            {getLanguageIcon(lang.code)}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <span style={{ fontSize: 12, fontWeight: 500 }}>{lang.nativeName}</span>
              <span style={{ fontSize: 10, color: '#666' }}>{lang.name}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageToggle; 