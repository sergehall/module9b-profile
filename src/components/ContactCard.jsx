function ContactCard({ email, github }) {
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

  const linkStyle = {
    color: '#0366d6',
    textDecoration: 'none',
    wordBreak: 'break-word',
    paddingLeft: '8px',
  };

  return (
    <div style={cardStyle}>
      <div style={rowStyle}>
        <span style={labelStyle}>Email:</span>
        <a href={`mailto:${email}`} style={linkStyle}>{email}</a>
      </div>
      <div style={rowStyle}>
        <span style={labelStyle}>GitHub:</span>
        <a href={github} target="_blank" rel="noreferrer" style={linkStyle}>{github}</a>
      </div>
    </div>
  );
}

export default ContactCard;
