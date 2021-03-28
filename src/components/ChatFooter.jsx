import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import {IconButton} from '@material-ui/core';
import React, { useRef, useState } from 'react'
import {sendMessage} from '../services/chatService'
import '../styles/ChatFooter.css'
import AttachFileIcon from '@material-ui/icons/AttachFile';
import {storage} from '../firebase/firebase'

export default function ChatFooter(props) {
    const[newText,setNewText]=useState('')
    const attachFileReference=useRef(null);
    const[file,setFile]=useState(null)
    const uploadRef=useRef(null)
    const[url,setUrl]=useState('')

    const submitHandler=async (e)=>{
        e.preventDefault();
        await sendMessage(props.contact.name,props.contact.number,newText)
        setNewText('')
    }   

    const handleAttachButtonClick=(e)=>{
        e.preventDefault();
        attachFileReference.current.click()
        uploadRef.current.style.display="block"
    }
   

    const handleFileUpload=(e)=>{
        e.preventDefault();
        uploadRef.current.style.display="none"  
        const upload=storage.ref(`files/${file.name}`).put(file);
         upload.on(
            "state-changed",
            snapshot => {},
            error=>{
                console.log("Error in uploading = ",error)
            },
              ()=>{
                storage.ref("files")
                .child(file.name)
                .getDownloadURL()
                .then(async (url)=>{
                    console.log("Download url = ",url)
                    setUrl(url)
                    await sendMessage(props.contact.name,props.contact.number,url)
                    setUrl('') 
                });
            }
        )     
    }
    return (
        <div className="chat-footer">
                <IconButton>
                    <InsertEmoticonIcon />
                </IconButton>
                <IconButton>
                    <AttachFileIcon onClick={handleAttachButtonClick} />
                </IconButton>
                <input 
                    type="file" 
                    style={{display:"none"}} 
                    ref={attachFileReference} 
                    onChange={(e)=>{setFile(e.target.files[0])}}
                />
                <button 
                    ref={uploadRef} 
                    style={{display:"none"}} 
                    onClick={handleFileUpload}>
                    Send
                </button>
                <form onSubmit={submitHandler}>
                    <input 
                        type="text" 
                        placeholder="Type a message" 
                        value={newText} 
                        onChange={(e)=>{setNewText(e.target.value)}}                                            
                    />
                </form>
                <IconButton>
                    <MicIcon />
                </IconButton>
                
        </div> 
    )
}
