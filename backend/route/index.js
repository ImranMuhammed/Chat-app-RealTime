const express=require('express')
const chatController=require('../controller/controller')
const route=express.Router();

route.post('/add',chatController.addMessage)
route.get('/:contactNumber',chatController.getConversations);
route.post('/add/contact',chatController.addContact);
route.get('/contact/all',chatController.getContacts);
route.get('/contact/:id',chatController.getContactDetails);

module.exports=route;

