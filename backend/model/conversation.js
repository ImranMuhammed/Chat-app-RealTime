const mongoose=require('mongoose')

const conversationSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    number:{
        type:String,
        required:true   
    },
    message:{
        type:String,
        required:true
    },
    timeStamp:{
        type:String,
        required:true
    },
    received:{
        type:Boolean,
        required:true,
        default:false
    }
})

const ChatModel=mongoose.model('chatmodels',conversationSchema)

module.exports=ChatModel;