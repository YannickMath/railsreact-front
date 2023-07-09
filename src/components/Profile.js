import React from 'react';
import ProfilePhoto from './ProfilePhoto';
import ProfileDescription from './ProfileDescription';
import ProfileNavigation from './ProfileNavigation';
import ProfileSearchBar from './ProfileSearchBar.js';
import "../App.css"

const Profile = () => {
  return (
    <div className="mainProfile">
      <div id="ProfilePhoto">
      <ProfilePhoto src="/twitter.webp" />

      </div>
      <div  id="ProfileDescription">
      <ProfileDescription />
        
        </div>
        <div id="ProfileNavigation">
        
      <ProfileNavigation />
        </div>
        <div id="ProfileSearchBar">
        <ProfileSearchBar />
        
        </div>
 
    </div>
  );
}

export default Profile;




