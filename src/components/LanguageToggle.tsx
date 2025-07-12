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
          <svg width="20" height="15" viewBox="0 0 20 15" fill="none">
            <rect width="20" height="15" fill="#DE2910"/>
            <polygon points="0,0 10,7.5 0,15" fill="#FFDE00"/>
            <polygon points="10,0 20,7.5 10,15" fill="#FFDE00"/>
            <circle cx="10" cy="7.5" r="1.5" fill="#DE2910"/>
          </svg>
        );
      case 'es':
        return (
          <svg width="20" height="15" viewBox="0 0 20 15" fill="none">
            <rect width="20" height="5" fill="#FFD100"/>
            <rect y="5" width="20" height="5" fill="#FF0000"/>
            <rect width="20" height="5" fill="#FFD100"/>
            <rect y="10" width="20" height="5" fill="#FF0000"/>
          </svg>
        );
      case 'en':
        return (
          <svg width="20" height="15" viewBox="0 0 20 15" fill="none">
            <rect width="20" height="15" fill="#012169"/>
            <path d="M0 0L20 15M20 0L0 15" stroke="#FFF" strokeWidth="1"/>
            <path d="M0 0L20 15M20 0L0 15" stroke="#C8102E" strokeWidth="0.5"/>
            <path d="M10 0V15M0 7.5H20" stroke="#FFF" strokeWidth="1"/>
            <path d="M10 0V15M0 7.5H20" stroke="#C8102E" strokeWidth="0.5"/>
          </svg>
        );
      case 'hi':
        return (
          <svg width="20" height="15" viewBox="0 0 20 15" fill="none">
            <rect width="20" height="5" fill="#FF9933"/>
            <rect y="5" width="20" height="5" fill="#FFFFFF"/>
            <rect y="10" width="20" height="5" fill="#138808"/>
            <circle cx="10" cy="7.5" r="1.5" fill="#000080"/>
          </svg>
        );
      case 'de':
        return (
          <svg width="20" height="15" viewBox="0 0 20 15" fill="none">
            <rect width="20" height="5" fill="#FFCE00"/>
            <rect y="5" width="20" height="5" fill="#D00"/>
            <rect y="10" width="20" height="5" fill="#000"/>
          </svg>
        );
      case 'fr':
        return (
          <svg width="20" height="15" viewBox="0 0 20 15" fill="none">
            <rect width="6.67" height="15" fill="#002395"/>
            <rect x="6.67" width="6.66" height="15" fill="#FFFFFF"/>
            <rect x="13.33" width="6.67" height="15" fill="#ED2939"/>
          </svg>
        );
      case 'ja':
        return (
          <svg width="20" height="15" viewBox="0 0 20 15" fill="none">
            <rect width="20" height="15" fill="#FFFFFF"/>
            <circle cx="10" cy="7.5" r="4" fill="#BC002D"/>
          </svg>
        );
      case 'ko':
        return (
          <svg width="20" height="15" viewBox="0 0 20 15" fill="none">
            <rect width="20" height="15" fill="#FFFFFF"/>
            <circle cx="10" cy="7.5" r="3" fill="#CD2E3A"/>
            <path d="M10 2.5L11.5 5L14 5L11.75 6.5L12.5 9L10 7.5L7.5 9L8.25 6.5L6 5L8.5 5L10 2.5Z" fill="#0047A0"/>
          </svg>
        );
      case 'it':
        return (
          <svg width="20" height="15" viewBox="0 0 20 15" fill="none">
            <rect width="6.67" height="15" fill="#009246"/>
            <rect x="6.67" width="6.66" height="15" fill="#FFFFFF"/>
            <rect x="13.33" width="6.67" height="15" fill="#CE2B37"/>
          </svg>
        );
      case 'ru':
        return (
          <svg width="20" height="15" viewBox="0 0 20 15" fill="none">
            <rect width="20" height="5" fill="#FFFFFF"/>
            <rect y="5" width="20" height="5" fill="#0039A6"/>
            <rect y="10" width="20" height="5" fill="#D52B1E"/>
          </svg>
        );
      case 'pt':
        return (
          <svg width="20" height="15" viewBox="0 0 20 15" fill="none">
            <rect width="20" height="15" fill="#006600"/>
            <circle cx="10" cy="7.5" r="3" fill="#FFCC00"/>
            <circle cx="10" cy="7.5" r="2" fill="#006600"/>
          </svg>
        );
      case 'tr':
        return (
          <svg width="20" height="15" viewBox="0 0 20 15" fill="none">
            <rect width="20" height="15" fill="#E30A17"/>
            <circle cx="10" cy="7.5" r="3" fill="#FFFFFF"/>
            <circle cx="10" cy="7.5" r="2" fill="#E30A17"/>
          </svg>
        );
      case 'bn':
        return (
          <svg width="20" height="15" viewBox="0 0 20 15" fill="none">
            <rect width="20" height="15" fill="#006A4E"/>
            <circle cx="10" cy="7.5" r="3" fill="#F42A41"/>
          </svg>
        );
      case 'pa':
        return (
          <svg width="20" height="15" viewBox="0 0 20 15" fill="none">
            <rect width="20" height="7.5" fill="#FF9933"/>
            <rect y="7.5" width="20" height="7.5" fill="#138808"/>
            <circle cx="10" cy="7.5" r="1.5" fill="#000080"/>
          </svg>
        );
      case 'jv':
        return (
          <svg width="20" height="15" viewBox="0 0 20 15" fill="none">
            <rect width="20" height="15" fill="#FFFFFF"/>
            <rect width="20" height="7.5" fill="#FF0000"/>
          </svg>
        );
      case 'te':
        return (
          <svg width="20" height="15" viewBox="0 0 20 15" fill="none">
            <rect width="20" height="5" fill="#FF9933"/>
            <rect y="5" width="20" height="5" fill="#FFFFFF"/>
            <rect y="10" width="20" height="5" fill="#138808"/>
            <circle cx="10" cy="7.5" r="1.5" fill="#000080"/>
          </svg>
        );
      case 'mr':
        return (
          <svg width="20" height="15" viewBox="0 0 20 15" fill="none">
            <rect width="20" height="5" fill="#FF9933"/>
            <rect y="5" width="20" height="5" fill="#FFFFFF"/>
            <rect y="10" width="20" height="5" fill="#138808"/>
            <circle cx="10" cy="7.5" r="1.5" fill="#000080"/>
          </svg>
        );
      case 'ta':
        return (
          <svg width="20" height="15" viewBox="0 0 20 15" fill="none">
            <rect width="20" height="5" fill="#FF9933"/>
            <rect y="5" width="20" height="5" fill="#FFFFFF"/>
            <rect y="10" width="20" height="5" fill="#138808"/>
            <circle cx="10" cy="7.5" r="1.5" fill="#000080"/>
          </svg>
        );
      case 'vi':
        return (
          <svg width="20" height="15" viewBox="0 0 20 15" fill="none">
            <rect width="20" height="15" fill="#DA251D"/>
            <polygon points="10,2.5 12.5,7.5 17.5,7.5 13.75,10.5 15,15 10,12.5 5,15 6.25,10.5 2.5,7.5 7.5,7.5" fill="#FFFF00"/>
          </svg>
        );
      case 'ur':
        return (
          <svg width="20" height="15" viewBox="0 0 20 15" fill="none">
            <rect width="20" height="15" fill="#FFFFFF"/>
            <rect width="20" height="5" fill="#01411C"/>
            <rect y="10" width="20" height="5" fill="#01411C"/>
            <circle cx="10" cy="7.5" r="1.5" fill="#FFFFFF"/>
          </svg>
        );
      default:
        return (
          <svg width="20" height="15" viewBox="0 0 20 15" fill="none">
            <rect width="20" height="15" fill="#4A90E2"/>
            <circle cx="10" cy="7.5" r="3" fill="#FFF"/>
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