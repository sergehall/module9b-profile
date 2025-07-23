// === User Profile Component Setup ===

// You can choose between two component versions:
// 1. UserProfileInline – uses inline CSS (required for Module 9B assignment)
// 2. UserProfile – uses CSS classes (better for flexibility and long-term design structure)

// By default, we're using UserProfileInline to satisfy the assignment instructions.
// To switch, simply comment/uncomment the imports and component rendering below.

// import UserProfile from './UserProfile'; // CSS-based version
import UserProfileInline from './UserProfileInline'; // Inline CSS version

// You can also toggle between different data sets:
// 1. userProfiles – from Module 9A (basic sample profiles)
// 2. frontendProfiles – more relevant, React-focused profiles for 9B

// import userProfiles from '../data/userProfiles';
import frontendProfiles from '../data/frontendProfiles.js';

import '../App.css';

function UserList() {
  return (
    <div className="profile-panel">
      {frontendProfiles.map((user) => (
        // Inline-styled component used here to satisfy assignment requirements
        <UserProfileInline
          key={user.id}
          name={user.name}
          bio={user.bio}
          image={user.profileImage}
          email={user.email}
          github={user.github}
        />

        // If you want to switch to the CSS-based component later:
        // <UserProfile
        //   key={user.id}
        //   name={user.name}
        //   bio={user.bio}
        //   image={user.profileImage}
        // />
      ))}
    </div>
  );
}

export default UserList;
