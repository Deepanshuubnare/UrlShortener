import React from 'react';
import Urlform from '../components/Urlform.jsx';
import { useNavigate } from '@tanstack/react-router';
import AuthButton from '../components/AuthButton.jsx';

const DashboardPage = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate({ to: "/userDashboard" });
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-100 to-purple-100 px-4 py-10 flex flex-col items-center relative">

      {/* Auth Button: top-right on md+, inline on mobile */}
      <div className="w-full flex justify-end md:absolute md:top-4 md:right-5 mb-4 md:mb-0">
        <AuthButton className="bg-white text-indigo-600 hover:text-white hover:bg-indigo-500 border border-indigo-500 font-medium px-4 py-2 rounded-md shadow transition duration-200" />
      </div>

      {/* View History Button */}
      <div className="w-full max-w-3xl flex justify-end mb-4">
        <button
          onClick={handleNavigate}
          className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold px-5 py-2 rounded-lg shadow-md hover:from-indigo-600 hover:to-purple-700 transition duration-300"
        >
          📁 View History
        </button>
      </div>

      {/* Main URL Shortener Content */}
      <div className="w-full max-w-3xl bg-white p-8 rounded-xl shadow-lg mb-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          🔗 URL Shortener
        </h1>
        <p className="text-center text-gray-500 text-sm mb-6">
          Shorten your URLs and track your history all in one place.
        </p>
        <Urlform />
      </div>
    </div>
  );
};

export default DashboardPage;
