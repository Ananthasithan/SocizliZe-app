import React from 'react';
import './navbarStyle.css';
import NaturePeopleIcon from '@material-ui/icons/NaturePeople';
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';


export default function Navbar() {
    return ( 
        <div className="nav-container">
            <div className="nav-left">    
                <span className="nav-logo-text">SocialiZe</span>
            </div>
            <div className="nav-centre">
                <div className="nav-search">
                    <SearchIcon style = {{fontSize: "35px", marginLeft: "10px"}}/>
                    <input type="text" placeholder = "Please tell us what you need" className="nav-searchinput" />
                </div>            
            </div>
            <div className="nav-right">
                <div className="nav-links">
                    <div className="nav-link">Home</div>
                    <div className="nav-link">Feed</div>
                </div>
                <div className="nav-icons">
                    <div className="nav-icon">
                        <PersonIcon/>
                        <span className="nav-icon-badge">1</span>
                    </div>
                    <div className="nav-icon">
                        <ChatBubbleOutlineIcon/>
                        <span className="nav-icon-badge">5</span>
                    </div>
                    <div className="nav-icon">
                        <NotificationsNoneIcon/>
                        <span className="nav-icon-badge">7</span>
                    </div>
                </div>
                <div className="profile">
                    <img className="nav-profile" src="/assets/profilepic_jason.jpeg" alt="profile photo" />
                </div>
            </div>
        </div>
    )
}
