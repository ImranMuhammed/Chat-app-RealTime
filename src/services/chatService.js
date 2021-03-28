import axios from 'axios'

const baseURL="http://localhost:8012/";

export const getMessages=async(contactNumber)=>{
   try{
    const response=await axios({
                                method:"get",
                                url:baseURL+contactNumber
                            })
        return response.data;
   } 
   catch(error){
       console.log(error)
   }
}

export const sendMessage=async(name,number,message)=>{
    try{
        const response=await axios({
            method:"post",
            url:baseURL+'add',
            data:{
                name:name,
                number:number,
                message:message,
                timeStamp:new Date().toLocaleTimeString(),
                received:false
            }
        })
    }
    catch(error){
        console.log(error)
    }
}

