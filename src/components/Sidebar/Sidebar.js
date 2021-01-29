import { Avatar } from "@material-ui/core";
import { AccountCircle, Bookmark, Email, Home, MoreHoriz, Notifications, Reorder, Whatshot } from "@material-ui/icons";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
    return (
        <div className="sidebar">

            <ul>
                <li>
                    <img className="sidebarLogo" src={"https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-2-1.png"} />
                </li>
                <li>
                    <p className="sidebarHome"> <Home /> <span>Home</span></p>
                </li>
                <li>
                    <p> <Whatshot /> <span>Explore</span></p>
                </li>
                <li>
                    <p> <Notifications /> <span>Notificações</span></p>
                </li>
                <li>
                    <p> <Email /> <span>Mensagens</span></p>
                </li>
                <li>
                    <p> <Bookmark /> <span>BookMark</span></p>
                </li>
                <li>
                    <p> <Reorder /> <span>Listas</span></p>
                </li>
                <li>
                    <p> <AccountCircle /> <span>Perfil</span></p>
                </li>
                <li>
                    <p> <MoreHoriz /> <span>Mais</span></p>
                </li>
                <button className="sidebarButton">Tweet</button>    
            </ul>
          
        </div>
    );
}

export default Sidebar;
