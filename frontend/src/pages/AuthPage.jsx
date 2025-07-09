import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

export const AuthPage = () => {
  const [login, setLogin] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-8 transition-all duration-300">
        
        {/* Dynamic Heading */}
        {/* <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          {login ? '🔐 Login' : '📝 Register'}
        </h2> */}

        {/* Form */}
        {login ? <LoginForm state={setLogin} /> : <RegisterForm state={setLogin} />}

        {/* Toggle Link (Below the Form) */}
        <p className="text-sm text-center text-gray-500 mt-6">
          {/* {login ? "Don't have an account?" : 'Already have an account?'}{' '} */}
          <button
            className="text-blue-600 hover:underline font-medium"
            onClick={() => setLogin(!login)}
          >
            {/* {login ? 'Register' : 'Login'} */}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
