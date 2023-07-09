import React from 'react';
import { AiOutlineMail } from "react-icons/ai";
import Button from "@mui/joy/Button/Button";
import ProfilePhoto from './ProfilePhoto';
import "../App.css"

const Profil = () => {
  return (
    <div className="mainProfile">
      <ProfilePhoto src="/twitter.webp" />
      <Button sx={{backgroundColor: "black", borderRadius:"20px"}}>Follow</Button>
      <AiOutlineMail />
    </div>
  );
}

export default Profil;




