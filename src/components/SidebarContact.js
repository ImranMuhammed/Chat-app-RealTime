import React from 'react'
import {Avatar , IconButton} from '@material-ui/core';
import '../styles/SidebarChatList.css'

export default function SidebarContact(props) {
    return (

            <div className="sidebarChat_list" >
                <Avatar src={props.contact.profilePicture} />
                <div className="sidebarChat_contact">
                   {<h5>{props.contact.name}</h5> } 
                   {<small>{props.contact.lastMessage}</small> } 
                </div>    
            </div>

    )
}
