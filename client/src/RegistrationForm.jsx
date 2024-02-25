//import React from 'react';

import './LoginForm.css'
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useState } from 'react'


const RegistrationForm = () => {
  const[firstname,setFirstName]=useState('');
  const[lastname,setLastName]=useState('');
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  async function register(ev){
    ev.preventDefault();
    const response = await fetch('http://localhost:4000/register',{
    method: 'POST',
    body:JSON.stringify({firstname,lastname,email,password}),
    headers: {'Content-Type':'application/json'},
  });
    if (response.status === 200){
      alert('Registration Successful!');
    }else {
      alert('Registration Failed!');
    }
  }
   
  return (
    
    <div className='wrapper'>
     
      <form onSubmit={register}>
        <h1>Register</h1>
        <br/><br/>
        <div className="input-box name">
          <input type="text" placeholder='Firstname'required 
            value={firstname}
            onChange={ev=>setFirstName(ev.target.value)} />
          <input type="text" placeholder='Lastname'required
          value={lastname}
          onChange={ev=>setLastName(ev.target.value)} />
        </div>
        <div className="input-box">
          <input type="email" 
          placeholder='Email'
          required 
          value={email}
          onChange={ev=>setEmail(ev.target.value)}
         />
            
          <FaUser className='icon'/>
        </div>
        <div className="input-box">
          <input type="password" 
          placeholder='Password'
          value={password}
          onChange={ev=>setPassword(ev.target.value)}
      
             />
              
          <FaLock className='icon'/>
        </div>
        <div className="input-box">
          <input type="password" 
          placeholder='Confirm Password'
          required 
          value={password}
          onChange={ev=>setPassword(ev.target.value)}
          />
          <FaLock className='icon'/>
        </div>
        
        <button type='submit'> Register Now </button>
    
        <div className="register-link">
           <p>Already have an Account? <Link to="/">Login Here</Link></p>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
