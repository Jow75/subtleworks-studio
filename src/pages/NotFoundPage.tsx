import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Compass, Layers } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Page Not Found — SubtleWorks Studio';
  }, []);

  return (
    <div className="not-found-page" style={{ padding: '8rem 0', textAlign: 'center' }}>
      <div className="container" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '16px',
            background: 'rgba(56, 189, 248, 0.1)',
            border: '1px solid rgba(56, 189, 248, 0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem',
            color: '#38bdf8'
          }}
        >
          <Compass size={32} />
        </div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ffffff', marginBottom: '1rem' }}>
          Extension or Page Not Found
        </h1>
        <p style={{ fontSize: '1.0625rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '2.5rem' }}>
          The link you followed may have changed, or the extension might not be published yet. Explore all available
          tools on our central ecosystem homepage.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <Link to="/" className="btn btn-primary btn-lg">
            <Layers size={16} />
            <span>Return to Extension Hub</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
