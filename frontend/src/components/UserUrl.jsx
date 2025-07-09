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
      <div className="flex justify-center items-center h-[80vh] bg-gradient-to-br from-blue-100 to-purple-100">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="max-w-4xl mx-auto p-4 mt-6 bg-red-100 border border-red-400 text-red-700 rounded text-center">
        Error loading your URLs: {error.message}
      </div>
    );
  }

  if (!urls.urls || urls.urls.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] text-center bg-gradient-to-br from-blue-100 to-purple-100 p-6">
        <svg className="w-12 h-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        <h2 className="text-xl font-semibold text-gray-800">No URLs Found</h2>
        <p className="text-sm text-gray-600 mt-1">You haven’t created any shortened URLs yet.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-100 to-purple-100 px-4 py-8">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2 text-center sm:text-left">📜 Your URL History</h2>

        {/* Table for large screens */}
        <div className="hidden md:block overflow-x-auto max-h-[70vh]">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-blue-50 sticky top-0 z-10">
              <tr>
                {['Original URL', 'Short URL', 'Clicks', 'Actions'].map((heading) => (
                  <th key={heading} className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {urls.urls.reverse().map((url) => (
                <tr key={url._id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 truncate max-w-xs text-sm text-gray-800">{url.full_url}</td>
                  <td className="px-6 py-4 text-sm text-blue-600 underline hover:text-blue-800">
                    <a href={`http://localhost:4000/${url.short_url}`} target="_blank" rel="noopener noreferrer">
                      {`localhost:4000/${url.short_url}`}
                    </a>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                      {url.clicks} {url.clicks === 1 ? 'click' : 'clicks'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleCopy(`http://localhost:4000/${url.short_url}`, url._id)}
                      className={`inline-flex items-center px-3 py-1.5 rounded-md text-xs font-medium transition ${
                        copiedId === url._id
                          ? 'bg-green-500 text-white hover:bg-green-600'
                          : 'bg-blue-500 text-white hover:bg-blue-600'
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

        {/* Card view for mobile */}
        <div className="md:hidden space-y-4">
          {urls.urls.reverse().map((url) => (
            <div key={url._id} className="bg-gray-50 p-4 rounded-md shadow-sm">
              <p className="text-sm text-gray-700 mb-1 truncate"><strong>Original:</strong> {url.full_url}</p>
              <p className="text-sm text-blue-600 underline mb-1">
                <a href={`http://localhost:4000/${url.short_url}`} target="_blank" rel="noopener noreferrer">
                  {`localhost:4000/${url.short_url}`}
                </a>
              </p>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Clicks:</strong> {url.clicks}
              </p>
              <button
                onClick={() => handleCopy(`http://localhost:4000/${url.short_url}`, url._id)}
                className={`w-full text-sm font-medium py-2 rounded-md transition ${
                  copiedId === url._id
                    ? 'bg-green-500 text-white'
                    : 'bg-blue-500 text-white hover:bg-blue-600'
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
