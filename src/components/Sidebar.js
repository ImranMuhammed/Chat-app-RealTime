import React, { useState } from 'react'

import SidebarHeader from './SidebarHeader'

import SidebarChatList from './SidebarChatList';

import '../styles/Sidebar.css'

export default function Sidebar() {


    return (
        <div className="sidebar">
            <SidebarHeader />        
            <SidebarChatList/>
        </div>
        
    )
}
