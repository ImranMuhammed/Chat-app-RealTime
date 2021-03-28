import React, { useState } from 'react'
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AddIcon from '@material-ui/icons/Add';
import {Avatar , IconButton} from '@material-ui/core';
import '../styles/SidebarHeader.css'


export default function SidebarHeader() {

    return (
        <div className="sidebar-header">
                <Avatar src="/images/dp1.jpg" alt="dp1"/>
                <div className="header-rightside-icons">
                    <IconButton>
                        <AddIcon/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton> 
                    <IconButton>
                        <MoreVertIcon  />
                    </IconButton> 
                            
                </div>
        </div>
    )
}
