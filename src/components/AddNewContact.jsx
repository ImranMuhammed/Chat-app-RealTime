import React, { useEffect, useState } from "react"
import { Form, Button, Card, Alert, Container } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import {addContact, getAllContacts} from '../services/contactsService'
import { useHistory } from "react-router"

export default function AddNewContact() {

  const[name,setName]=useState('')
  const[number,setNumber]=useState('')
  const[error,setError]=useState()
  const history=useHistory()

  const handleSubmit=async(e)=>{
      e.preventDefault();
      if(name==="" || number==""){
          return setError("All fields are required")
      }
      if(number.length!=10){
          return setError("Number should contain 10 digits")
      }
      if(isNaN(number)){
          return setError("Number cannot contains any alphabets or special characters")
      }
     if(await isNumberExist(number)){
       return setError("Contact with given number already exist")
     }      
      try{
            setError("")
            await addContact(name,number);
            history.push("/")
      }
      catch(error){
            setError(error.message)
      }
  }

  const isNumberExist=async(number)=>{
    const contacts= await getAllContacts();
    contacts.map(contact=>{
      if(contact.number==number)        
          return true;
    })
    return false;

  }

  return (
    <>
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
    <div>
        <Card style={{ width: '20rem' }}>
        <Card.Body >
          <h2 className="text-center mb-4">Add New Contact</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit} >
            <Form.Group id="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text"  onChange={(e)=>setName(e.target.value)} />
            </Form.Group>
            <Form.Group id="number">
              <Form.Label>Number</Form.Label>
              <Form.Control type="tel"   onChange={(e)=>setNumber(e.target.value)}/>
            </Form.Group>
            <Button className="w-100" type="submit" variant="success">
              Add New Contact
            </Button>
          </Form>
          <Button className="w-100"  variant="secondary" onClick={()=>history.push("/")}>
              Cancel
            </Button>
        </Card.Body>
      </Card>
    </div>     
      </Container>
    </>
  )
} 
