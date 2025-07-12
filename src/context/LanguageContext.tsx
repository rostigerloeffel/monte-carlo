import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

// Import all language files
import de from '../locales/de';
import en from '../locales/en';
import fr from '../locales/fr';
import es from '../locales/es';
import pt from '../locales/pt';
import ru from '../locales/ru';
import zh from '../locales/zh';
import hi from '../locales/hi';
import bn from '../locales/bn';
import ja from '../locales/ja';
import ko from '../locales/ko';
import pa from '../locales/pa';
import jv from '../locales/jv';
import te from '../locales/te';
import mr from '../locales/mr';
import tr from '../locales/tr';
import ta from '../locales/ta';
import vi from '../locales/vi';
import ur from '../locales/ur';
import it from '../locales/it';

type Language = 
  | 'zh' // Chinesisch (Mandarin) - 1.1 Milliarden
  | 'es' // Spanisch - 460 Millionen
  | 'en' // Englisch - 380 Millionen
  | 'hi' // Hindi - 340 Millionen
  | 'bn' // Bengali - 230 Millionen
  | 'pt' // Portugiesisch - 220 Millionen
  | 'ru' // Russisch - 150 Millionen
  | 'ja' // Japanisch - 125 Millionen
  | 'pa' // Punjabi - 100 Millionen
  | 'de' // Deutsch - 95 Millionen
  | 'jv' // Javanisch - 85 Millionen
  | 'ko' // Koreanisch - 80 Millionen
  | 'fr' // Französisch - 77 Millionen
  | 'te' // Telugu - 75 Millionen
  | 'mr' // Marathi - 75 Millionen
  | 'tr' // Türkisch - 75 Millionen
  | 'ta' // Tamil - 70 Millionen
  | 'vi' // Vietnamesisch - 70 Millionen
  | 'ur' // Urdu - 70 Millionen
  | 'it'; // Italienisch - 65 Millionen

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

// Combine all translations
const translations = {
  de,
  en,
  fr,
  es,
  pt,
  ru,
  zh,
  hi,
  bn,
  ja,
  ko,
  pa,
  jv,
  te,
  mr,
  tr,
  ta,
  vi,
  ur,
  it
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Check localStorage for saved language preference
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage) {
      return savedLanguage;
    }
    
    // Use browser's default language if supported
    const browserLanguage = navigator.language.toLowerCase();
    const supportedLanguages: Language[] = ['zh', 'es', 'en', 'hi', 'bn', 'pt', 'ru', 'ja', 'pa', 'de', 'jv', 'ko', 'fr', 'te', 'mr', 'tr', 'ta', 'vi', 'ur', 'it'];
    
    // Check for exact match
    if (supportedLanguages.includes(browserLanguage as Language)) {
      return browserLanguage as Language;
    }
    
    // Check for language code match (e.g., 'en-US' -> 'en')
    const languageCode = browserLanguage.split('-')[0];
    if (supportedLanguages.includes(languageCode as Language)) {
      return languageCode as Language;
    }
    
    // Default to German if browser language is not supported
    return 'de';
  });

  useEffect(() => {
    // Save language preference to localStorage
    localStorage.setItem('language', language);
    
    // Update document language attribute
    document.documentElement.setAttribute('lang', language);
  }, [language]);

  const t = (key: string): string => {
    const translation = translations[language]?.[key as keyof typeof translations[typeof language]];
    return translation || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}; 