import React, { useState,useEffect } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import { Link, useHistory } from 'react-router-dom';
import {getAllContacts} from '../services/contactsService'
import SidebarContact from './SidebarContact';
import '../styles/SidebarChatList.css'
import Button from '@material-ui/core/Button';
import Pusher from 'pusher-js'
import {useAuth} from '../context/AuthContext'

export default function SidebarChatList() {
    const[searchedName,setSearchedName]=useState('')
    const[contacts,setContacts]=useState([]);
    const history=useHistory()
    const {logout} =useAuth()

    useEffect(async() => {
        const contactsList= await getAllContacts();
        setContacts(contactsList)
    }, [])

    useEffect(()=>{
        const pusher = new Pusher('432d39f38726b0f4c850', {
            cluster: 'ap2'
          });    
          const channel = pusher.subscribe('contacts');
          channel.bind('inserted', (data)=> {
            setContacts([...contacts,data])
          });
          return ()=>{
              channel.unbind_all();
              channel.unsubscribe();
          }
    },[contacts]) 

    return (<>
            <div className="sidebar_search_container">
            <div className="Sidebar_buttons_container">
                <Button variant="contained" color="primary" onClick={()=>history.push("/add")} >
                    Add New Contact
                </Button> 
                <Button variant="contained" color="secondary" onClick={logout} >
                    Logout
                </Button> 
            </div>
                       

                <div className="sidebar_searchBox">
                    <SearchIcon/>
                    <input 
                        type="text" 
                        placeholder="Enter the name of the contact"
                        value={searchedName} 
                        onChange={(e)=>{setSearchedName(e.target.value)}} />
                </div>
                
            </div>

            <div className="sidebarChat_container">
                {
                    searchedName==''?
                    contacts!=undefined &&  contacts.map((contact,index)=>{
                        return( 
                            <Link key={index}   to={`/${contact._id}`} >
                                <SidebarContact contact={contact} />
                            </Link>
                                
                            )
                    }) :
                    contacts!=undefined &&  contacts.map((contact,index)=>
                        {
                            if(contact.name.toLowerCase().includes(searchedName.toLowerCase())){
                            return (
                                <Link key={index}  to={`/${contact._id}`} >
                                    <SidebarContact contact={contact} />
                                </Link>                                  
                                )
                            }
                        } 
                    )
                }
            </div>
        </>
    )
}


