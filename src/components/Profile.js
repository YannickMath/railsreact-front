import React from "react";
import ProfilePhoto from "./ProfilePhoto";
import ProfileDescription from "./ProfileDescription";
import ProfileNavigation from "./ProfileNavigation";
import ProfileSearchBar from "./ProfileSearchBar.js";
import "../App.css";
import { useNavigate } from "react-router-dom";



export default function Profile () {

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:3000/users/sign_out", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        // body: JSON.stringify({ user: state }),
      });

      if (response.ok) {
        console.log("Vous êtes déconnecté");
        navigate("/");
      }
    } catch (error) {
      console.error("Error during sign up: ", error);
      alert(`Error signing up: ${error.message}`);
    }


  }





  return (
    <div className="mainProfile">
      <div id="ProfilePhoto">
        <ProfilePhoto src="/twitter.webp" handleLogout={handleLogout}/>
      </div>
      <div id="ProfileDescription">
        <ProfileDescription />
      </div>
      <div id="ProfileSearchBar">
        <ProfileSearchBar />
      </div>
      <div id="ProfileNavigation">
        <ProfileNavigation />
      </div>
    </div>
  );
};




