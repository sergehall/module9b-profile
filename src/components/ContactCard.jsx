import React, { useState } from 'react';

function ContactCard({ email, github }) {
  const [hoveredLink, setHoveredLink] = useState(null); // 'email' or 'github'

  const cardStyle = {
    marginTop: '16px',
    paddingTop: '12px',
    borderTop: '1px solid #e0e0e0',
    fontSize: '14px',
    color: '#444',
    lineHeight: '1.8',
    textAlign: 'left',
  };

  const rowStyle = {
    display: 'flex',
    alignItems: 'baseline',
    marginBottom: '6px',
  };

  const labelStyle = {
    fontWeight: 'bold',
    minWidth: '60px',
  };

  const baseLinkStyle = {
    textDecoration: 'none',
    wordBreak: 'break-word',
    paddingLeft: '8px',
    transition: 'color 0.2s ease',
  };

  const emailLinkStyle = {
    ...baseLinkStyle,
    color: hoveredLink === 'email' ? '#0366d6' : '#444',
  };

  const githubLinkStyle = {
    ...baseLinkStyle,
    color: hoveredLink === 'github' ? '#0366d6' : '#444',
  };

  return (
    <div style={cardStyle}>
      <div style={rowStyle}>
        <span style={labelStyle}>Email:</span>
        <a
          href={`mailto:${email}`}
          style={emailLinkStyle}
          onMouseEnter={() => setHoveredLink('email')}
          onMouseLeave={() => setHoveredLink(null)}
        >
          {email}
        </a>
      </div>
      <div style={rowStyle}>
        <span style={labelStyle}>GitHub:</span>
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          style={githubLinkStyle}
          onMouseEnter={() => setHoveredLink('github')}
          onMouseLeave={() => setHoveredLink(null)}
        >
          {github}
        </a>
      </div>
    </div>
  );
}

export default ContactCard;
