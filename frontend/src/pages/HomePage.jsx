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
    <div className="min-h-screen w-full px-4 py-8 text-slate-100">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-800/80 bg-slate-950/90 p-8 shadow-2xl">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-br from-cyan-500/20 via-violet-500/10 to-transparent blur-3xl" />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center">
            <div className="lg:w-1/2">
              <div className="flex items-center justify-between gap-4 rounded-3xl border border-slate-800/60 bg-slate-900/80 p-4 shadow-inner shadow-slate-950/20">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/90">Classic Dark</p>
                  <h1 className="mt-3 text-4xl font-semibold leading-tight text-slate-100">URL Shortener</h1>
                </div>
                <button
                  onClick={handleRedirect}
                  className="glow-button rounded-2xl bg-slate-900/90 px-5 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-slate-800"
                >
                  Shortener Pro 🚀
                </button>
              </div>

              <p className="mt-8 max-w-xl text-slate-400 text-sm leading-7">
                Turn long links into elegant, memorable short URLs. Build modern shareable links with a refined dark interface and fast redirect caching.
              </p>

              <div className="mt-10 flex flex-wrap gap-3 text-sm text-slate-300">
                <span className="rounded-full border border-slate-700/70 bg-slate-900/80 px-4 py-2">Fast redirects</span>
                <span className="rounded-full border border-slate-700/70 bg-slate-900/80 px-4 py-2">Redis caching</span>
                <span className="rounded-full border border-slate-700/70 bg-slate-900/80 px-4 py-2">Rate limiting</span>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="dark-card rounded-[2rem] p-8 shadow-2xl shadow-slate-950/30">
                <h2 className="text-xl font-semibold text-slate-100 mb-3">Create your short link</h2>
                <p className="text-sm text-slate-400 mb-6">Paste a URL and get a clean short link instantly.</p>
                <Urlform1 />
              </div>
            </div>
          </div>

          <footer className="mt-10 text-center text-slate-500">
            <Link to="/TermsAndCondition" className="hover:text-cyan-300 transition">📄 Terms & Conditions</Link>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
