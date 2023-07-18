import React from 'react';
import "../App.css";
import { AiOutlineMail, AiFillCamera, AiOutlineLogout } from "react-icons/ai";
import Button from "@mui/joy/Button/Button";
import Divider from "@mui/material/Divider/Divider";

const ProfilePhoto = ({ src, handleLogout }) => {

  // const {handleLogout} = props

  
  return (
    <div className="photoProfileContainer">
      
      <div className='leftbox'>

<AiFillCamera size={30}  style={{border: "solid 1px black", borderRadius: "50px",  cursor:"pointer"}} />
      <img src={src} alt="profilImage" className="profilePic"/>

      </div>
      <div className='rightbox'>

      <AiOutlineMail size={30}  className="mailButton"  />
      <Button 
      sx={{backgroundColor: "black", borderRadius:"20px", height:"40px", width: "150px"}}
     
      // onClick={openMedia}
      >Follow</Button>
      <AiOutlineLogout size={30}  className="logoutButton" onClick={handleLogout} />

      </div>
      <Divider/>
    </div>
  );
}

export default ProfilePhoto;
