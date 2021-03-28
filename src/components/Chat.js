import React, { useState, useEffect } from 'react'
import ChatBody from './ChatBody'
import ChatHeader from './ChatHeader'
import { getContactDetails} from '../services/contactsService'
import ChatFooter from './ChatFooter'
import '../styles/Chat.css'

export default function Chat(props) {  
    const[contact,setContact]=useState('');
    const contactId=props.match.params.id;
   
  useEffect(async()=>{
      const contactDetails=await getContactDetails(contactId)
      setContact(contactDetails)
  },[contactId])

   
    return (
        contact!=undefined &&
        <div className="chat">
             <ChatHeader contact={{name:contact.name,profilePicture:contact.profilePicture}} />
             <ChatBody contactNumber={contact.number} />
             <ChatFooter contact={contact} />            
        </div>
        
    )
}
