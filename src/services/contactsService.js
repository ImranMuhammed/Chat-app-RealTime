import axios from 'axios'

const baseURL="http://localhost:8012/";

export const getAllContacts=async()=>{
    try{
        const {data}=await axios({
            method:"get",
            url:baseURL+'contact/all'
        })
        return data;
    }catch(error){
        console.log(error)
        console.log("Something went wrong")
    }
}

export const getContactDetails=async(contactId)=>{
    try{
        const {data}=await axios({
            method:"get",
            url:baseURL+`contact/${contactId}`
        })
        return data;
    }catch(error){
        console.log(error)
        console.log("Something went wrong")
    }
}

export const addContact=async(name,number)=>{
    try{
        const {data}=await axios({
            method:"post",
            url:baseURL+"add/contact",
            data:{
                name:name,
                number:number,
                lastSeen:new Date(),
                profilePicture:''
            }
        })
        return data;
    }catch(error){
        console.log(error)
        console.log("Error in adding new Contact")
    }
}

