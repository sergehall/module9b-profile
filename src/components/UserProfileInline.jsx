import ContactCard from "./ContactCard.jsx";

function UserProfileInline({ name, bio, image, email, github }) {
  const containerStyle = {
    maxWidth: '400px',
    margin: '10px auto',
    padding: '24px',
    color: '#333333',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(181, 230, 204, 0.6)',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    boxSizing: 'border-box',
    backgroundColor: '#ffffff'
  };

  const imageStyle = {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '4px solid #f0fff4',
    marginBottom: '16px'
  };

  const nameStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '0.5rem 0',
    color: '#222'
  };

  const bioStyle = {
    fontSize: '16px',
    color: '#555',
    lineHeight: 1.4
  };

  return (
    <div style={containerStyle}>
      <img src={image} alt={`${name}'s profile`} style={imageStyle} />
      <h1 style={nameStyle}>{name}</h1>
      <p style={bioStyle}>{bio}</p>
      <ContactCard email={email} github={github} />
    </div>
  );
}

export default UserProfileInline;
