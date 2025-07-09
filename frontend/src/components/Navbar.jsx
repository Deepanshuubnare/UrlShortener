import React from 'react';
import { Link } from '@tanstack/react-router';
import AuthButton from './AuthButton.jsx';


const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Left side - Logo/Name */}
          <Link to="/" className="text-2xl font-bold text-purple-700 hover:text-purple-900 transition-colors duration-200">
            🔗 Shortify
          </Link>

          {/* Right side - Auth Buttons */}
          {/* <div>
            <AuthButton />
          </div> */}
        </div>
      </div>
      
    </nav>
  );
};

export default Navbar;
