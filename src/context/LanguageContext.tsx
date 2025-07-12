import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

type Language = 'de' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

// Translation keys
const translations = {
  de: {
    'integration.title': 'Integration',
    'integration.description': 'Verbinde deine Monte Carlo Prognose mit deinen Projektmanagement-Tools für eine nahtlose Arbeitsablauf-Integration.',
    'integration.status.working': 'Wir arbeiten derzeit an der Integration mit {tool}. Diese Funktion wird in Kürze verfügbar sein.',
    'integration.status.integration': 'Integration',
    'theme.light': 'Hell',
    'theme.dark': 'Dunkel',
    'theme.system': 'System',
    'theme.select': 'Theme auswählen',
    'language.german': 'Deutsch',
    'language.english': 'English',
    'language.select': 'Sprache auswählen',
    'input.story-points.label': 'Bisher erledigte Story Points pro Sprint:',
    'input.story-points.placeholder': 'z.B. 12, 15 18, 20',
    'input.story-points.detected': 'Erkannte Werte:',
    'input.story-points.none': 'Keine gültigen Zahlen erkannt',
    'input.remaining.label': 'Offene Story Points:',
    'input.remaining.placeholder': 'z.B. 42',
    'input.remaining.value': 'Wert:',
    'input.remaining.none': 'Keine gültige Zahl erkannt',
    'statistics.title': 'Prognose',
    'statistics.no-values': 'Keine Werte vorhanden.',
    'statistics.values-count': 'Anzahl Werte:',
    'statistics.mean': 'Mittelwert:',
    'statistics.min': 'Minimum:',
    'statistics.max': 'Maximum:',
    'statistics.sprints-needed': 'Noch benötigte Sprints:',
    'statistics.avg-case': 'Avg. Case:',
    'statistics.best-case': 'Best Case:',
    'statistics.worst-case': 'Worst Case:',
    'percentiles.title': 'Simulations-Perzentile:',
    'percentiles.p95': '95%:',
    'percentiles.p85': '85%:',
    'percentiles.p75': '75%:',
    'percentiles.p50': '50%:',
    'percentiles.sprints': 'Sprints',
    'chart.monte-carlo.title': 'Monte-Carlo-Prognose (Histogramm):',
    'chart.monte-carlo.x-axis': 'Akkumulationen',
    'chart.monte-carlo.y-axis': 'Häufigkeit',
    'chart.monte-carlo.iterations.label': 'Anzahl Iterationen:',
    'chart.monte-carlo.iterations.range': '(100 bis 1.000.000)',
    'chart.story-points.title': 'Storypoints / Sprint:',
    'chart.story-points.x-axis': 'Sprint',
    'chart.story-points.y-axis': 'Storypoints',
    'monte-carlo.title': 'Monte Carlo Simulation',
    'monte-carlo.subtitle': 'Story Points Prognose Tool',
    'monte-carlo.description': 'Ein kostenloses, interaktives Tool für Monte Carlo Simulationen zur Story Points Prognose in agilen Projekten.',
    'features.title': 'Features',
    'features.monte-carlo': 'Monte Carlo Simulationen für präzise Story Points Prognosen',
    'features.statistics': 'Statistische Analysen mit Visualisierungen und Prozentilen',
    'features.integration': 'Integration mit Project Management Tools',
    'features.responsive': 'Responsive Design für Desktop und Mobile',
    'features.modern': 'Moderne React/TypeScript Architektur',
    'features.free': 'Kostenlos und Open Source',
    'demo.title': 'Live Demo',
    'demo.visit': 'Besuche die Live-Version:',
    'what-is.title': 'Was ist Monte Carlo Simulation?',
    'what-is.description': 'Monte Carlo Simulationen sind eine statistische Methode zur Risikoanalyse und Prognose. In der agilen Project Management und Estimation helfen sie dabei:',
    'what-is.forecasts': 'Realistische Zeitprognosen basierend auf historischen Daten',
    'what-is.risk': 'Risikoabschätzung für Projektabschlüsse',
    'what-is.confidence': 'Vertrauensintervalle für Story Points Schätzungen',
    'what-is.accuracy': 'Verbesserte Planungsgenauigkeit durch statistische Analysen',
    'technologies.title': 'Technologien',
    'technologies.react': 'React 18 mit TypeScript',
    'technologies.vite': 'Vite für schnelle Entwicklung',
    'technologies.css': 'Moderne CSS mit Flexbox und Grid',
    'technologies.responsive': 'Responsive Design für alle Geräte',
    'technologies.hosting': 'GitHub Pages für kostenloses Hosting',
    'seo.title': 'SEO & Suchmaschinenoptimierung',
    'seo.description': 'Diese Anwendung ist für optimale Auffindbarkeit in Suchmaschinen konfiguriert und optimiert für folgende Suchbegriffe:',
    'seo.primary': 'Primäre Suchbegriffe:',
    'seo.project-management': 'project management - Projektmanagement Tools und Methoden',
    'seo.estimation': 'estimation - Schätzung und Prognose von Story Points',
    'seo.monte-carlo': 'monte carlo - Monte Carlo Simulationen für Projektplanung',
    'seo.prognosis': 'prognosis - Prognose und Vorhersage von Projektzeiten',
    'seo.jira': 'jira - Jira Integration und Projektmanagement',
    'seo.asana': 'asana - Asana Projektmanagement Tool',
    'seo.monday': 'monday - Monday.com Projektmanagement',
    'seo.redmine': 'redmine - Redmine Projektmanagement System',
    'seo.youtrack': 'youtrack - YouTrack Issue Tracking',
    'seo.trello': 'trello - Trello Kanban Board Integration',
    'seo.linear': 'linear - Linear Projektmanagement Tool',
    'seo.github-issues': 'github issues - GitHub Issues Tracking und Management',
    'seo.gitlab-issues': 'gitlab issues - GitLab Issues und Projektverwaltung',
    'seo.clickup': 'clickup - ClickUp Projektmanagement Platform',
    'seo.basecamp': 'basecamp - Basecamp Team Collaboration Tool',
    'seo.features': 'SEO Features:',
    'seo.meta-tags': 'Meta Tags für bessere Google-Indexierung',
    'seo.open-graph': 'Open Graph Tags für Social Media Sharing',
    'seo.structured-data': 'Structured Data (JSON-LD) für Rich Snippets',
    'seo.sitemap': 'Sitemap.xml für Suchmaschinen-Crawler',
    'seo.robots': 'Robots.txt für optimale Crawling-Anweisungen',
    'seo.localization': 'Deutsche Lokalisierung für bessere lokale Suchergebnisse',
    'performance.title': 'Performance',
    'performance.loading': 'Schnelle Ladezeiten durch Vite Build-Optimierung',
    'performance.responsive': 'Responsive Design für alle Geräte',
    'performance.pwa': 'Progressive Web App Features',
    'performance.optimized': 'Optimierte Bilder und Assets',
    'contributing.title': 'Beitragen',
    'contributing.description': 'Verbesserungsvorschläge und Pull Requests sind willkommen!',
    'license.title': 'License',
    'license.mit': 'MIT'
  },
  en: {
    'integration.title': 'Integration',
    'integration.description': 'Connect your Monte Carlo forecast with your project management tools for seamless workflow integration.',
    'integration.status.working': 'We are currently working on the integration with {tool}. This feature will be available soon.',
    'integration.status.integration': 'Integration',
    'theme.light': 'Light',
    'theme.dark': 'Dark',
    'theme.system': 'System',
    'theme.select': 'Select theme',
    'language.german': 'Deutsch',
    'language.english': 'English',
    'language.select': 'Select language',
    'input.story-points.label': 'Completed Story Points per Sprint:',
    'input.story-points.placeholder': 'e.g. 12, 15 18, 20',
    'input.story-points.detected': 'Detected values:',
    'input.story-points.none': 'No valid numbers detected',
    'input.remaining.label': 'Remaining Story Points:',
    'input.remaining.placeholder': 'e.g. 42',
    'input.remaining.value': 'Value:',
    'input.remaining.none': 'No valid number detected',
    'statistics.title': 'Forecast',
    'statistics.no-values': 'No values available.',
    'statistics.values-count': 'Number of values:',
    'statistics.mean': 'Mean:',
    'statistics.min': 'Minimum:',
    'statistics.max': 'Maximum:',
    'statistics.sprints-needed': 'Sprints still needed:',
    'statistics.avg-case': 'Avg. Case:',
    'statistics.best-case': 'Best Case:',
    'statistics.worst-case': 'Worst Case:',
    'percentiles.title': 'Simulation Percentiles:',
    'percentiles.p95': '95%:',
    'percentiles.p85': '85%:',
    'percentiles.p75': '75%:',
    'percentiles.p50': '50%:',
    'percentiles.sprints': 'sprints',
    'chart.monte-carlo.title': 'Monte Carlo Forecast (Histogram):',
    'chart.monte-carlo.x-axis': 'Accumulations',
    'chart.monte-carlo.y-axis': 'Frequency',
    'chart.monte-carlo.iterations.label': 'Number of iterations:',
    'chart.monte-carlo.iterations.range': '(100 to 1,000,000)',
    'chart.story-points.title': 'Story Points / Sprint:',
    'chart.story-points.x-axis': 'Sprint',
    'chart.story-points.y-axis': 'Story Points',
    'monte-carlo.title': 'Monte Carlo Simulation',
    'monte-carlo.subtitle': 'Story Points Forecast Tool',
    'monte-carlo.description': 'A free, interactive tool for Monte Carlo simulations for story points forecasting in agile projects.',
    'features.title': 'Features',
    'features.monte-carlo': 'Monte Carlo simulations for precise story points forecasting',
    'features.statistics': 'Statistical analyses with visualizations and percentiles',
    'features.integration': 'Integration with project management tools',
    'features.responsive': 'Responsive design for desktop and mobile',
    'features.modern': 'Modern React/TypeScript architecture',
    'features.free': 'Free and open source',
    'demo.title': 'Live Demo',
    'demo.visit': 'Visit the live version:',
    'what-is.title': 'What is Monte Carlo Simulation?',
    'what-is.description': 'Monte Carlo simulations are a statistical method for risk analysis and forecasting. In agile project management and estimation, they help with:',
    'what-is.forecasts': 'Realistic time forecasts based on historical data',
    'what-is.risk': 'Risk assessment for project completion',
    'what-is.confidence': 'Confidence intervals for story points estimates',
    'what-is.accuracy': 'Improved planning accuracy through statistical analysis',
    'technologies.title': 'Technologies',
    'technologies.react': 'React 18 with TypeScript',
    'technologies.vite': 'Vite for fast development',
    'technologies.css': 'Modern CSS with Flexbox and Grid',
    'technologies.responsive': 'Responsive design for all devices',
    'technologies.hosting': 'GitHub Pages for free hosting',
    'seo.title': 'SEO & Search Engine Optimization',
    'seo.description': 'This application is configured for optimal discoverability in search engines and optimized for the following search terms:',
    'seo.primary': 'Primary search terms:',
    'seo.project-management': 'project management - Project management tools and methods',
    'seo.estimation': 'estimation - Estimation and forecasting of story points',
    'seo.monte-carlo': 'monte carlo - Monte Carlo simulations for project planning',
    'seo.prognosis': 'prognosis - Forecasting and prediction of project times',
    'seo.jira': 'jira - Jira integration and project management',
    'seo.asana': 'asana - Asana project management tool',
    'seo.monday': 'monday - Monday.com project management',
    'seo.redmine': 'redmine - Redmine project management system',
    'seo.youtrack': 'youtrack - YouTrack issue tracking',
    'seo.trello': 'trello - Trello kanban board integration',
    'seo.linear': 'linear - Linear project management tool',
    'seo.github-issues': 'github issues - GitHub issues tracking and management',
    'seo.gitlab-issues': 'gitlab issues - GitLab issues and project management',
    'seo.clickup': 'clickup - ClickUp project management platform',
    'seo.basecamp': 'basecamp - Basecamp team collaboration tool',
    'seo.features': 'SEO Features:',
    'seo.meta-tags': 'Meta tags for better Google indexing',
    'seo.open-graph': 'Open Graph tags for social media sharing',
    'seo.structured-data': 'Structured data (JSON-LD) for rich snippets',
    'seo.sitemap': 'Sitemap.xml for search engine crawlers',
    'seo.robots': 'Robots.txt for optimal crawling instructions',
    'seo.localization': 'German localization for better local search results',
    'performance.title': 'Performance',
    'performance.loading': 'Fast loading times through Vite build optimization',
    'performance.responsive': 'Responsive design for all devices',
    'performance.pwa': 'Progressive Web App features',
    'performance.optimized': 'Optimized images and assets',
    'contributing.title': 'Contributing',
    'contributing.description': 'Improvement suggestions and pull requests are welcome!',
    'license.title': 'License',
    'license.mit': 'MIT'
  }
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Check localStorage for saved language preference
    const savedLanguage = localStorage.getItem('language') as Language;
    return savedLanguage || 'de';
  });

  useEffect(() => {
    // Save language preference to localStorage
    localStorage.setItem('language', language);
    
    // Update document language attribute
    document.documentElement.setAttribute('lang', language);
  }, [language]);

  const t = (key: string): string => {
    const translation = translations[language][key as keyof typeof translations[typeof language]];
    return translation || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}; 