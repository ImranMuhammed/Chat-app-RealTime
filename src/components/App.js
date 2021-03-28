import '../styles/App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import React from 'react'
import {Switch,BrowserRouter,Route} from 'react-router-dom'
import Login from './Login';
import Signup from './Signup';
import {AuthProvider} from '../context/AuthContext'
import PrivateRoot from './PrivateRoot';
import AddNewContact from './AddNewContact'


function App() {

  return (
    <div className="app">
      <div className="app-body">  
        <BrowserRouter>
          <AuthProvider>
              <PrivateRoot component={Sidebar}></PrivateRoot>
              
              <Switch>
                  <PrivateRoot exact path="/add" component={AddNewContact} ></PrivateRoot>      
                  <Route exact path="/login" component={Login} ></Route>
                  <Route exact path="/signup" component={Signup} ></Route> 
                  <PrivateRoot exact path="/:id" component={Chat} ></PrivateRoot>
                              
              </Switch>
          </AuthProvider>        
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
