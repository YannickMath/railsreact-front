import React from 'react';
import "../App.css";
import { AiOutlineMail, AiFillCamera, AiOutlineLogout } from "react-icons/ai";
// import {GrMail} from "react-icons/gr";  
import Button from "@mui/joy/Button/Button";

const ProfilePhoto = ({ src }) => {
  return (
    <div className="photoProfileContainer">
      
      <div className='leftbox'>

<AiFillCamera size={30}  style={{border: "solid 1px black", borderRadius: "50px", padding: "10px", margin: "0 5px 0 5px", cursor:"pointer"}} />
      <img src={src} alt="profilImage" className="profilePic"/>

      </div>
      <div className='rightbox'>

      <AiOutlineMail size={30}  className="mailButton"  />
      <Button 
      sx={{backgroundColor: "black", borderRadius:"20px", height:"40px", width: "150px"}}
     
      // onClick={openMedia}
      >Follow</Button>
      <AiOutlineLogout size={30}  className="logoutButton"  />

      </div>
    </div>
  );
}

export default ProfilePhoto;
