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
          <svg width="22" height="22" viewBox="0 0 61 26" fill="currentColor">
            <g clipPath="url(#clip0_2967_1690)">
              <path d="M31.2078 5.90745H33.4436V17.1052C33.4436 20.0579 32.1134 22.1192 29.0285 22.1192C27.8681 22.1192 26.9625 21.9242 26.3398 21.7013V19.5565C27.0191 19.835 27.8398 19.9743 28.6606 19.9743C30.5568 19.9743 31.2078 18.8601 31.2078 17.2445V5.90745Z" fill="currentColor"/>
              <path d="M37.5475 5.04395C38.4248 5.04395 39.0475 5.57319 39.0475 6.52027C39.0475 7.43949 38.4248 7.99659 37.5475 7.99659C36.6701 7.99659 36.0475 7.46734 36.0475 6.52027C36.0475 5.60105 36.6701 5.04395 37.5475 5.04395ZM36.4437 9.75147H38.5946V22.0077H36.4437V9.75147Z" fill="currentColor"/>
              <path d="M43.9152 22.0077H41.8209V9.75146H43.9152V11.8963C44.6511 10.4478 45.8964 9.4172 48.3303 9.55648V11.6178C45.585 11.3392 43.9152 12.147 43.9152 14.7654V22.0077Z" fill="currentColor"/>
              <path d="M58.3775 19.8072C57.585 21.4228 56.085 22.2584 54.1605 22.2584C50.8492 22.2584 49.1794 19.5008 49.1794 15.8796C49.1794 12.4256 50.9341 9.50077 54.4152 9.50077C56.2265 9.50077 57.6416 10.3086 58.3775 11.8963V9.75147H60.5284V22.0077H58.3775V19.8072ZM54.7265 20.3086C56.6511 20.3086 58.3492 19.1108 58.3492 16.381V15.4061C58.3492 12.6763 56.7926 11.4785 54.953 11.4785C52.5473 11.4785 51.302 13.0384 51.302 15.8796C51.3303 18.8322 52.519 20.3086 54.7265 20.3086Z" fill="currentColor"/>
              <path d="M19.9721 3.40039H10.1797C10.1797 5.79593 12.1608 7.74579 14.5948 7.74579H16.4061V9.44496C16.4061 11.8405 18.3872 13.7904 20.8212 13.7904V4.23605C20.8212 3.76251 20.4533 3.40039 19.9721 3.40039Z" fill="currentColor"/>
              <path d="M15.1323 8.19141H5.33984C5.33984 10.5869 7.32098 12.5368 9.75494 12.5368H11.5663V14.2638C11.5663 16.6594 13.5474 18.6092 15.9814 18.6092V9.02706C15.9814 8.58138 15.6134 8.19141 15.1323 8.19141Z" fill="currentColor"/>
              <path d="M10.2925 13.0107H0.5C0.5 15.4063 2.48113 17.3561 4.91509 17.3561H6.72641V19.0553C6.72641 21.4509 8.70755 23.4007 11.1415 23.4007V13.8464C11.1415 13.3729 10.7453 13.0107 10.2925 13.0107Z" fill="currentColor"/>
            </g>
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