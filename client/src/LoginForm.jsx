//import React from 'react';
import { useState } from 'react'
//import {useForm, SubmitHandler} from "react-hook-form";
import './LoginForm.css'
//import RegistrationForm from './RegistrationForm';
import { FaUser, FaLock } from "react-icons/fa";
import { Link, Navigate } from 'react-router-dom';



const LoginForm = () => {
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[redirect,setRedirect]=useState('');
  async function login(ev){
    ev.preventDefault();
    const response = await fetch('http://localhost:4000/',{
      method: 'POST',
      body:JSON.stringify({email,password}),
      headers: {'Content-Type':'application/json'},
      credentials: 'include',
    });
    if(response.ok){
      setRedirect(true);
    }else{
      alert("Wrong Credentials");
    }
  }
  
if(redirect){
  return <Navigate to ={'/dashboard'}/>
}

  
  return (
    
    <div className='wrapper'>
     
      <form onSubmit={login}>
        <h1>Login</h1>
        <div className="input-box">
          <input type="email" 
          placeholder='Email'
          required
          value={email}
          onChange={ev =>setEmail(ev.target.value)}
          />
          
          <FaUser className='icon'/>
        </div>
        <div className="input-box">
          <input type="password" 
          placeholder='Password'
          required
          value={password}
          onChange={ev =>setPassword(ev.target.value)}
          />
             <FaLock className='icon'/>
        </div>
       
        <button> Log In </button>
        <div className="register-link">
           <p> Don't have an Account? <Link to="register">Register</Link></p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
