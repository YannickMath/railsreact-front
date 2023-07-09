import React from 'react';
import "../App.css";
import { AiOutlineMail } from "react-icons/ai";
import Button from "@mui/joy/Button/Button";

const ProfilePhoto = ({ src }) => {
  return (
    <div className="photoProfileContainer">
      <img src={src} alt="profilImage" className="profilePic"/>
      <AiOutlineMail size={30} style={{border: "solid 1px black", borderRadius: "50px", padding: "10px"}}/>
      <Button sx={{backgroundColor: "black", borderRadius:"20px", height:"40px"}}>Follow</Button>
    </div>
  );
}

export default ProfilePhoto;
