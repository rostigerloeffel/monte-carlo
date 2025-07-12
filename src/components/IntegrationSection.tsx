import React from 'react';

const IntegrationSection: React.FC = () => {
  const handleJiraClick = () => {
    // TODO: Implement Jira integration
    console.log('Jira integration clicked');
  };

  const handleTrelloClick = () => {
    // TODO: Implement Trello integration
    console.log('Trello integration clicked');
  };

  return (
    <div style={{ width: '100%', maxWidth: 900, marginTop: 24 }}>
      <h2 style={{ margin: '0 0 16px 0', fontSize: 22, fontWeight: 600, letterSpacing: 0.2 }}>Integration</h2>
      <div style={{ display: 'flex', gap: 20, alignItems: 'center', flexWrap: 'wrap' }}>
        <button
          onClick={handleJiraClick}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            padding: '14px 20px',
            backgroundColor: '#0052CC',
            color: 'white',
            border: 'none',
            borderRadius: 8,
            cursor: 'pointer',
            fontSize: 15,
            fontWeight: 600,
            boxShadow: '0 2px 8px rgba(0, 82, 204, 0.3)',
            transition: 'all 0.2s ease',
            minWidth: '120px',
            justifyContent: 'center'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#0047B3';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 82, 204, 0.4)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#0052CC';
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 82, 204, 0.3)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.571 11.513H0a5.218 5.218 0 0 0 5.232 5.215h2.13c.6 0 1.087-.489 1.087-1.089v-4.126zM23.017 4.851a5.215 5.215 0 0 0-5.215-5.214h-2.13c-.6 0-1.087.489-1.087 1.089v4.126h8.432zM11.571 23.017H0a5.215 5.215 0 0 1-5.215-5.215h2.13c.6 0 1.087.489 1.087 1.089v4.126zM23.017 12.571H0a5.215 5.215 0 0 1 5.215-5.215h2.13c.6 0 1.087.489 1.087 1.089v4.126z"/>
          </svg>
          Jira
        </button>
        
        <button
          onClick={handleTrelloClick}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            padding: '14px 20px',
            backgroundColor: '#0079BF',
            color: 'white',
            border: 'none',
            borderRadius: 8,
            cursor: 'pointer',
            fontSize: 15,
            fontWeight: 600,
            boxShadow: '0 2px 8px rgba(0, 121, 191, 0.3)',
            transition: 'all 0.2s ease',
            minWidth: '120px',
            justifyContent: 'center'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#0066A3';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 121, 191, 0.4)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#0079BF';
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 121, 191, 0.3)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 9h2v8H6V9zm4 0h2v8h-2V9zm4 0h2v8h-2V9z"/>
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z"/>
          </svg>
          Trello
        </button>
      </div>
      <div style={{ marginTop: 16, fontSize: 14, color: '#666', lineHeight: 1.5 }}>
        <p style={{ margin: 0 }}>
          <strong>Verbinde deine Monte Carlo Prognose</strong> mit deinen Projektmanagement-Tools für eine nahtlose Arbeitsablauf-Integration.
        </p>
      </div>
    </div>
  );
};

export default IntegrationSection; 