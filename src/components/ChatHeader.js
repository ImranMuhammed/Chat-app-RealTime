import React from 'react'
import {Avatar,IconButton} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import '../styles/ChatHeader.css'

export default function ChatHeader(props) {

    return (
        <div className="chat-header-container">
             <div className="chat-contact-details">
                <div>
                    <Avatar src={props.contact.profilePicture} />
                </div>      
                <div className="chat-contact-recent">
                    <h5>{props.contact.name}</h5>
                    <p>Last Seen</p>
                </div>
             </div>
                
            <div className="chat-header-icons">
                <IconButton>
                    <SearchIcon/>
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>  
            </div>

        </div>
    )
}
