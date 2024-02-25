//import { useState } from 'react'
import reactLogo from './assets/logo.png'

import './App.css'
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
//import Dashboard from './Dashboard';
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
import Dashboard from './Dashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>
      <img src={reactLogo} className="logo react" alt="React logo" />
      <LoginForm/>
    </div>
  },
  {
    path: '/register',
    element: <div>
    <img src={reactLogo} className="logo react" alt="React logo" />
    <RegistrationForm/>
  </div>
  },
  {
    path: '/dashboard',
    element: <div>
    <Dashboard/>
  </div>
  }
  
])

function App() {

  return ( 
    <RouterProvider router={router} />
      
  );
}

export default App;
