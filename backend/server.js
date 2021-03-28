const config=require('config')
const express=require('express')
const mongoose=require('mongoose')
const route=require('./route/index')
const cors=require('cors')

const dbConfig=config.get('config.dbConfig');
const dbUri="mongodb+srv://"+dbConfig.user+":"+dbConfig.password+"@cluster0.izza9.mongodb.net/"+dbConfig.name+"retryWrites=true&w=majority";
const dbOptions=dbConfig.options;

const PORT=config.get('config.server.port')

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.use('/',route)

mongoose.connect(dbUri,dbOptions)
.then(()=>console.log("Mongo Server is connected"))
.catch((error)=>console.log("Some error occured while connecting to mongo server",error))

app.listen(PORT,()=>{
    console.log("Express Server is connected at PORT:"+PORT);
})
