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
    <div className="min-h-screen w-full px-4 py-10 text-slate-100">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Dashboard</p>
            <h1 className="mt-3 text-4xl font-semibold text-slate-100">Your link control center</h1>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={handleNavigate}
              className="glow-button rounded-2xl bg-slate-900/90 px-5 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-slate-800"
            >
              📁 View History
            </button>
            <AuthButton />
          </div>
        </div>

        <div className="dark-card rounded-[2rem] border border-slate-800/70 p-8 shadow-2xl shadow-slate-950/30">
          <h2 className="text-3xl font-semibold text-slate-100 mb-2">Shorten a new URL</h2>
          <p className="text-slate-400 mb-8 max-w-2xl">Create fast links and manage your history with a polished dark classical UI.</p>
          <Urlform />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
