 import React, { useContext, useEffect, useRef, useState } from "react"
import { Form, Button, Card, Alert, Container } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import { useAuth } from '../context/AuthContext'

export default function Signup() {
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[confirmPassword,setConfirmPassword]=useState('')
  const [error, setError] = useState("")
  const history = useHistory()

  const {signup,user } =useAuth();

    useEffect(()=>{
        if(user){
          history.push("/")
        }
    },[])

   const submitHandler=async(e)=>{
     e.preventDefault()
    if(confirmPassword!==password){
      return setError("Passwords do not match")
    }

    try{
        await signup(email,password)
        history.push("/")
    }
    catch(error){
      setError("Failed to create new Account.\n"+error.message)
    }
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
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={submitHandler} >
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" required onChange={(e)=>setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password"  required onChange={(e)=>setPassword(e.target.value)}/>
            </Form.Group>
            <Form.Group id="confirmPassword">
              <Form.Label>Confirm-Password</Form.Label>
              <Form.Control type="password"  required onChange={(e)=>setConfirmPassword(e.target.value)} />
            </Form.Group>
            <Button className="w-100" type="submit" variant="success">
              Signup
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Login</Link>
      </div>
    </div>
      
      </Container>
    </>
  )
} 
