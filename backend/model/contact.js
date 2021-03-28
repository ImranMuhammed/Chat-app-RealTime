const mongoose=require('mongoose')

const contactSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    number:{
        type:String,
        required:true
    },
    lastSeen:{
        type:String,
        required:true
    },
    profilePicture:{
        type:String
    }
})

const Contact=mongoose.model('contacts',contactSchema);

module.exports=Contact