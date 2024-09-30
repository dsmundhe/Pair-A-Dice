import React from 'react';
import './Profile.css';

// Sample profile data
const profileData = {
  name: 'Aashvi Tekade',
  email: 'aashu30@gmail.com',
  bio: 'A passionate developer with experience in building web applications using React and Node.js.',
  image: 'https://i.pinimg.com/564x/3d/91/09/3d910919cf4d41c1114457504dc29201.jpg', // Replace with your profile image URL
};

function Profile() {
  return (
    <div className="profile-container">
      <img src={profileData.image} alt="Profile" className="profile-image" />
      <h1>{profileData.name}</h1>
      <p className="profile-email">{profileData.email}</p>
      <p className="profile-bio">{profileData.bio}</p>
    </div>
  );
}

export default Profile;
