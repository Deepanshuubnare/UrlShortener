import React from 'react';

const TermsAndConditionsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 px-4 py-10 flex justify-center">
      <div className="bg-white p-6 rounded-xl shadow-lg max-w-3xl w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          📜 Terms & Conditions
        </h1>

        <p className="mb-4 text-gray-600">
          Welcome to our URL Shortener platform. This tool allows you to shorten long URLs into compact, shareable links. Below are the terms and conditions governing your usage of this service.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">1. Project Purpose</h2>
        <p className="text-gray-600 mb-4">
          This project was created as a full-stack web application to demonstrate practical usage of the MERN stack, including authentication, analytics, and rate limiting.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">2. Fair Use & Rate Limiting</h2>
        <p className="text-gray-600 mb-4">
          To ensure system stability,All users are limited to 15 URL shortenings per hour. Abuse of this system (e.g., spamming) may result in temporary blocks.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">3. Account & Authentication</h2>
        <p className="text-gray-600 mb-4">
          Users can optionally register/login to access advanced features such as custom URLs, QR codes, and history tracking. By signing up, you agree to use the service responsibly.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">4. Privacy</h2>
        <p className="text-gray-600 mb-4">
          No personal data is stored apart from your email and shortened URLs. We do not share or sell your data. Analytics are limited to click tracking for your own dashboard.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">5. Liability</h2>
        <p className="text-gray-600 mb-4">
          We are not responsible for any misuse of the service, including but not limited to redirecting users to harmful or inappropriate websites.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">6. Contact</h2>
        <p className="text-gray-600">
          For any issues, reach out to the developer via GitHub or email .
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;
