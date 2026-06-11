import React from 'react';
import { Link } from '@tanstack/react-router';
import AuthButton from './AuthButton.jsx';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800/70 bg-slate-950/95 shadow-2xl backdrop-blur-sm">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold tracking-tight text-cyan-300 hover:text-cyan-100 transition-colors duration-200">
            🔗 Shortify
          </Link>
          <AuthButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
