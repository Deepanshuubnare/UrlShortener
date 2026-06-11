import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

export const AuthPage = () => {
  const [login, setLogin] = useState(true);

  return (
    <div className="min-h-screen px-4 py-12 text-slate-100">
      <div className="mx-auto max-w-md rounded-[2rem] border border-slate-800/80 bg-slate-950/90 p-8 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Access secured</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-100">{login ? 'Welcome Back' : 'Create Your Account'}</h2>
          <p className="mt-3 text-sm text-slate-400">Dark theme login and registration with subtle classical styling.</p>
        </div>

        {login ? <LoginForm state={setLogin} /> : <RegisterForm state={setLogin} />}

        <p className="mt-6 text-center text-slate-400 text-sm">
          {login ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button
            className="text-cyan-300 hover:text-cyan-100 font-semibold"
            onClick={() => setLogin(!login)}
          >
            {login ? 'Register' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
