import React from 'react';
import Urlform1 from '../components/Urlform1.jsx';
import AuthButton from '../components/AuthButton.jsx';
import { useNavigate, Link } from '@tanstack/react-router';

const HomePage = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate({ to: '/dashboard' });
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-100 to-purple-100 flex flex-col px-4 py-4 relative">

      {/* Top-right buttons */}
      <div className="absolute top-4 right-5 flex gap-4">
        <button
          onClick={handleRedirect}
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium px-4 py-2 rounded-md shadow transition duration-200"
        >
          Shortener Pro 🚀
        </button>
        <AuthButton />
      </div>

      {/* Main Centered Content */}
      <div className="flex-grow flex flex-col justify-center items-center">
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md mt-10">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
            🔗 URL Shortener
          </h1>
          <p className="text-center text-gray-500 text-sm mb-6">
            Paste a long URL and get a short, shareable one instantly!
          </p>
          <Urlform1 />
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-4">
        <Link
          to="/TermsAndCondition"
          className="text-gray-700 font-medium hover:underline hover:text-black text-sm"
        >
          📄 Terms & Conditions
        </Link>
      </footer>
    </div>
  );
};

export default HomePage;
