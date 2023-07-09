import React from 'react';
import "../App.css";

const ProfilePhoto = ({ src }) => {
  return (
    <div className="imageProfile">
      <img src={src} alt="profilImage" className="profilePic"/>
    </div>
  );
}

export default ProfilePhoto;
