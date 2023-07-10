import "../App.css";
import { AiFillBell, AiOutlineSearch, AiOutlineMail, AiFillHome } from "react-icons/ai";

export default function ProfileSearchBar() {

    return (
        <div className="mainContainerSearchBar">
            <AiFillBell size={30} className="searchBarButton"/>
            <AiOutlineSearch size={30} className="searchBarButton"/>
            <AiOutlineMail size={30} className="searchBarButton"/>
            <AiFillHome size={30} className="searchBarButton"/>
            
        </div>
        )
        }