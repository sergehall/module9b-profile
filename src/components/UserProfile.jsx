function UserProfile({ name, bio, image }) {
  return (
    <div className="user-profile">
      <img src={image} alt={`${name}'s profile`} className="profile-image" />
      <h1 className="profile-name">{name}</h1>
      <p className="profile-bio">{bio}</p>
    </div>
  );
}

export default UserProfile;
