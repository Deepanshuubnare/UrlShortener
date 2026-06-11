import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getAllUserUrls } from '../api/user.api.js';

const UserUrl = () => {
  const { data: urls, isLoading, isError, error } = useQuery({
    queryKey: ['userUrls'],
    queryFn: getAllUserUrls,
    refetchInterval: 30000,
    staleTime: 0,
  });

  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (url, id) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[80vh] bg-slate-950 px-4">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-cyan-500"></div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="max-w-4xl mx-auto p-4 mt-6 rounded-3xl border border-rose-500/20 bg-rose-900/90 text-rose-200 text-center">
        Error loading your URLs: {error.message}
      </div>
    );
  }

  if (!urls.urls || urls.urls.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] text-center bg-slate-950 p-6 rounded-[2rem]">
        <svg className="w-12 h-12 text-slate-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        <h2 className="text-xl font-semibold text-slate-100">No URLs Found</h2>
        <p className="text-sm text-slate-400 mt-1">You haven’t created any shortened URLs yet.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full px-4 py-8 text-slate-100">
      <div className="max-w-6xl mx-auto dark-card p-6">
        <h2 className="text-2xl font-bold text-slate-100 mb-6 border-b border-slate-800 pb-2 text-center sm:text-left">📜 Your URL History</h2>

        <div className="hidden md:block overflow-x-auto max-h-[70vh] rounded-[1.5rem] border border-slate-800 bg-slate-950/80">
          <table className="min-w-full divide-y divide-slate-800">
            <thead className="bg-slate-900 sticky top-0 z-10">
              <tr>
                {['Original URL', 'Short URL', 'Clicks', 'Actions'].map((heading) => (
                  <th key={heading} className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {urls.urls.reverse().map((url) => (
                <tr key={url._id} className="hover:bg-slate-900/70 transition">
                  <td className="px-6 py-4 truncate max-w-xs text-sm text-slate-200">{url.full_url}</td>
                  <td className="px-6 py-4 text-sm text-cyan-300 underline hover:text-cyan-200">
                    <a href={`https://urlshortener-okv9.onrender.com${url.short_url}`} target="_blank" rel="noopener noreferrer">
                      {`https://urlshortener-okv9.onrender.com/${url.short_url}`}
                    </a>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span className="rounded-full bg-slate-900 px-2 py-1 text-xs font-medium text-cyan-200">
                      {url.clicks} {url.clicks === 1 ? 'click' : 'clicks'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleCopy(`https://urlshortener-okv9.onrender.com/${url.short_url}`, url._id)}
                      className={`inline-flex items-center rounded-2xl px-3 py-1.5 text-xs font-medium transition ${
                        copiedId === url._id
                          ? 'bg-emerald-500 text-slate-950 hover:bg-emerald-400'
                          : 'bg-cyan-500 text-slate-950 hover:bg-cyan-400'
                      }`}
                    >
                      {copiedId === url._id ? 'Copied!' : 'Copy URL'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="md:hidden space-y-4 mt-4">
          {urls.urls.reverse().map((url) => (
            <div key={url._id} className="rounded-3xl border border-slate-800/70 bg-slate-950/90 p-4 shadow-lg shadow-slate-950/20">
              <p className="text-sm text-slate-200 mb-1 truncate"><strong>Original:</strong> {url.full_url}</p>
              <p className="text-sm text-cyan-300 underline mb-1">
                <a href={`https://urlshortener-okv9.onrender.com/${url.short_url}`} target="_blank" rel="noopener noreferrer">
                  {`https://urlshortener-okv9.onrender.com/${url.short_url}`}
                </a>
              </p>
              <p className="text-sm text-slate-300 mb-2">
                <strong>Clicks:</strong> {url.clicks}
              </p>
              <button
                onClick={() => handleCopy(`https://urlshortener-okv9.onrender.com/${url.short_url}`, url._id)}
                className={`w-full rounded-2xl py-2 text-sm font-medium transition ${
                  copiedId === url._id
                    ? 'bg-emerald-500 text-slate-950'
                    : 'bg-cyan-500 text-slate-950 hover:bg-cyan-400'
                }`}
              >
                {copiedId === url._id ? 'Copied!' : 'Copy URL'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserUrl;
