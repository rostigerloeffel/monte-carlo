import React, { useState } from 'react';
import { Counter } from 'counterapi';
import { useLanguage } from '../context/LanguageContext';
import './IntegrationSection.css';

const counter = new Counter({ workspace: 'monte-carlo' });

const IntegrationSection: React.FC = () => {
  const [selectedIntegration, setSelectedIntegration] = useState<string | null>(null);
  const { t } = useLanguage();
  

  const handleJiraClick = () => {
    setSelectedIntegration('Jira');
    counter.up('jira');
  };

  const handleTrelloClick = () => {
    setSelectedIntegration('Trello');
    counter.up('trello');
  };

  const handleMondayClick = () => {
    setSelectedIntegration('Monday');
    counter.up('monday');
  };

  const handleAsanaClick = () => {
    setSelectedIntegration('Asana');
    counter.up('asana');
  };

  const handleYouTrackClick = () => {
    setSelectedIntegration('YouTrack');
    counter.up('youtrack');
  };

  const handleLinearClick = () => {
    setSelectedIntegration('Linear');
    counter.up('linear');
  };

  const handleBasecampClick = () => {
    setSelectedIntegration('Basecamp');
    counter.up('basecamp');
  };

  const handleRedmineClick = () => {
    setSelectedIntegration('Redmine');
    counter.up('redmine');
  };

  const handleGitHubClick = () => {
    setSelectedIntegration('GitHub');
    counter.up('github');
  };

  const handleGitLabClick = () => {
    setSelectedIntegration('GitLab');
    counter.up('gitlab');
  };

  const handleClickUpClick = () => {
    setSelectedIntegration('ClickUp');
    counter.up('clickup');
  };

  const handleMoreClick = () => {
    setSelectedIntegration('Weitere Tools');
    counter.up('others');
  };

  return (
    <div className="integration-section" style={{ 
      width: '100%', 
      maxWidth: '900px', 
      marginTop: 24,
      padding: '0 1rem'
    }}>
      <h2 style={{ margin: '0 0 16px 0', fontSize: 22, fontWeight: 600, letterSpacing: 0.2 }}>{t('integration.title')}</h2>
      <div style={{ 
        display: 'flex', 
        gap: '1rem', 
        alignItems: 'center', 
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        <button
          onClick={handleJiraClick}
          className="integration-button"
          style={{
            backgroundColor: '#0052CC',
            boxShadow: '0 2px 8px rgba(0, 82, 204, 0.3)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#0047B3';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 82, 204, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#0052CC';
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 82, 204, 0.3)';
          }}
        >
          <svg width="22" height="22" viewBox="0 0 21 24" fill="currentColor" style={{ flexShrink: 0 }}>
            <path d="M19.9721 3.40039H10.1797C10.1797 5.79593 12.1608 7.74579 14.5948 7.74579H16.4061V9.44496C16.4061 11.8405 18.3872 13.7904 20.8212 13.7904V4.23605C20.8212 3.76251 20.4533 3.40039 19.9721 3.40039Z" fill="currentColor"/>
            <path d="M15.1323 8.19141H5.33984C5.33984 10.5869 7.32098 12.5368 9.75494 12.5368H11.5663V14.2638C11.5663 16.6594 13.5474 18.6092 15.9814 18.6092V9.02706C15.9814 8.58138 15.6134 8.19141 15.1323 8.19141Z" fill="currentColor"/>
            <path d="M10.2925 13.0107H0.5C0.5 15.4063 2.48113 17.3561 4.91509 17.3561H6.72641V19.0553C6.72641 21.4509 8.70755 23.4007 11.1415 23.4007V13.8464C11.1415 13.3729 10.7453 13.0107 10.2925 13.0107Z" fill="currentColor"/>
          </svg>
          <span style={{ display: 'inline-block', verticalAlign: 'baseline' }}>Jira</span>
        </button>
        
        <button
          onClick={handleTrelloClick}
          className="integration-button"
          style={{
            backgroundColor: '#0079BF',
            boxShadow: '0 2px 8px rgba(0, 121, 191, 0.3)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#0066A3';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 121, 191, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#0079BF';
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 121, 191, 0.3)';
          }}
        >
          <svg width="22" height="22" viewBox="0 0 63 95" fill="currentColor" style={{ flexShrink: 0 }}>
            <path d="m55.3 40.6h-47.5c-4.1 0-7.4 3.3-7.4 7.4v47.6c0 4.1 3.3 7.4 7.4 7.4h47.5c4.1 0 7.4-3.3 7.4-7.4v-47.6c0-4.1-3.3-7.4-7.4-7.4zm-28.1 44.9c0 1.4-1.1 2.5-2.5 2.5h-10.4c-1.4 0-2.5-1.1-2.5-2.5v-30.9c0-1.4 1.1-2.5 2.5-2.5h10.4c1.4 0 2.5 1.1 2.5 2.5zm24-14.2c0 1.4-1.1 2.5-2.4 2.5h-10.5c-1.4 0-2.5-1.1-2.5-2.5v-16.7c0-1.4 1.1-2.5 2.5-2.5h10.4c1.4 0 2.5 1.1 2.5 2.5z" fill="currentColor"/>
          </svg>
          <span style={{ display: 'inline-block', verticalAlign: 'baseline' }}>Trello</span>
        </button>
        
        <button
          onClick={handleMondayClick}
          className="integration-button"
          style={{
            backgroundColor: '#00CA72',
            boxShadow: '0 2px 8px rgba(0, 202, 114, 0.3)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#00B363';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 202, 114, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#00CA72';
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 202, 114, 0.3)';
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/>
          </svg>
          <span style={{ display: 'inline-block', verticalAlign: 'baseline' }}>Monday</span>
        </button>
        
        <button
          onClick={handleAsanaClick}
          className="integration-button"
          style={{
            backgroundColor: '#F06A6A',
            boxShadow: '0 2px 8px rgba(240, 106, 106, 0.3)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#E55A5A';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(240, 106, 106, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#F06A6A';
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(240, 106, 106, 0.3)';
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" fill="currentColor"/>
          </svg>
          <span style={{ display: 'inline-block', verticalAlign: 'baseline' }}>Asana</span>
        </button>
        
        <button
          onClick={handleYouTrackClick}
          className="integration-button"
          style={{
            backgroundColor: '#FF6B35',
            boxShadow: '0 2px 8px rgba(255, 107, 53, 0.3)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#E55A2B';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 107, 53, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#FF6B35';
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(255, 107, 53, 0.3)';
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
          </svg>
          <span style={{ display: 'inline-block', verticalAlign: 'baseline' }}>YouTrack</span>
        </button>
        
        <button
          onClick={handleLinearClick}
          className="integration-button"
          style={{
            backgroundColor: '#5E6AD2',
            boxShadow: '0 2px 8px rgba(94, 106, 210, 0.3)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#4F5BC2';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(94, 106, 210, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#5E6AD2';
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(94, 106, 210, 0.3)';
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" fill="currentColor"/>
          </svg>
          <span style={{ display: 'inline-block', verticalAlign: 'baseline' }}>Linear</span>
        </button>
        
        <button
          onClick={handleBasecampClick}
          className="integration-button"
          style={{
            backgroundColor: '#1D2D35',
            boxShadow: '0 2px 8px rgba(29, 45, 53, 0.3)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#0F1D25';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(29, 45, 53, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#1D2D35';
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(29, 45, 53, 0.3)';
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/>
          </svg>
          <span style={{ display: 'inline-block', verticalAlign: 'baseline' }}>Basecamp</span>
        </button>
        
        <button
          onClick={handleRedmineClick}
          className="integration-button"
          style={{
            backgroundColor: '#B02B2C',
            boxShadow: '0 2px 8px rgba(176, 43, 44, 0.3)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#A01A1B';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(176, 43, 44, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#B02B2C';
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(176, 43, 44, 0.3)';
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" fill="currentColor"/>
          </svg>
          <span style={{ display: 'inline-block', verticalAlign: 'baseline' }}>Redmine</span>
        </button>
        
        <button
          onClick={handleGitHubClick}
          className="integration-button"
          style={{
            backgroundColor: '#24292E',
            boxShadow: '0 2px 8px rgba(36, 41, 46, 0.3)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#1A1E22';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(36, 41, 46, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#24292E';
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(36, 41, 46, 0.3)';
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/>
          </svg>
          <span style={{ display: 'inline-block', verticalAlign: 'baseline' }}>GitHub</span>
        </button>
        
        <button
          onClick={handleGitLabClick}
          className="integration-button"
          style={{
            backgroundColor: '#FC6D26',
            boxShadow: '0 2px 8px rgba(252, 109, 38, 0.3)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#E55A1B';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(252, 109, 38, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#FC6D26';
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(252, 109, 38, 0.3)';
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
          </svg>
          <span style={{ display: 'inline-block', verticalAlign: 'baseline' }}>GitLab</span>
        </button>
        
        <button
          onClick={handleClickUpClick}
          className="integration-button"
          style={{
            backgroundColor: '#7B68EE',
            boxShadow: '0 2px 8px rgba(123, 104, 238, 0.3)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#6A5ACD';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(123, 104, 238, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#7B68EE';
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(123, 104, 238, 0.3)';
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/>
          </svg>
          <span style={{ display: 'inline-block', verticalAlign: 'baseline' }}>ClickUp</span>
        </button>
        
        <button
          onClick={handleMoreClick}
          className="integration-button"
          style={{
            backgroundColor: '#6C757D',
            boxShadow: '0 2px 8px rgba(108, 117, 125, 0.3)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#5A6268';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(108, 117, 125, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#6C757D';
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(108, 117, 125, 0.3)';
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
          </svg>
          <span style={{ display: 'inline-block', verticalAlign: 'baseline' }}>Mehr...</span>
        </button>
      </div>
      
      {selectedIntegration && (
        <div style={{ 
          marginTop: 12, 
          padding: '12px 16px', 
          backgroundColor: 'rgba(0, 82, 204, 0.05)', 
          borderRadius: 6, 
          border: '1px solid rgba(0, 82, 204, 0.1)',
          fontSize: 13,
          color: '#4A5568',
          lineHeight: 1.4,
          transition: 'all 0.2s ease'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#0052CC">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#0052CC"/>
            </svg>
            <span style={{ fontWeight: 500, color: '#2D3748', fontSize: 13 }}>
              {selectedIntegration} {t('integration.status.integration')}
            </span>
          </div>
          <p style={{ margin: 0, color: '#718096', fontSize: 12 }}>
            {t('integration.status.working').replace('{tool}', selectedIntegration || '')}
          </p>
        </div>
      )}
      
      <div style={{ marginTop: 16, fontSize: 14, color: '#666', lineHeight: 1.5 }}>
        <p style={{ margin: 0 }}>
          <strong>{t('integration.description')}</strong>
        </p>
      </div>
    </div>
  );
};

export default IntegrationSection; 