import React from 'react'
import Urlform from './components/Urlform.jsx';
import HomePage from './pages/HomePage.jsx';
import LoginForm from './components/LoginForm.jsx';
import { AuthPage } from './pages/AuthPage.jsx';
import { Outlet } from '@tanstack/react-router';
import Navbar from './components/Navbar.jsx';
export const RootLayout = () => {
  return (
      <div>
        <Navbar/>
      <Outlet/>
     </div>
  )
}
export default RootLayout;


