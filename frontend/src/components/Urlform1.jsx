import React, { useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { QueryClient } from '@tanstack/react-query'
import { createShortUrl } from '../api/shorturlapi';
import { queryClient } from '../main.jsx'
import QRCodeDisplay from './QRCodeDisplay.jsx';
export const Urlform1 = () => {
  const [url, setUrl] = useState("https://www.google.com/");
  const [shortUrl,setShortUrl]=useState()
  const [copied, setCopied] = useState(false)
    const [error, setError] = useState(null)
   const [customSlug, setCustomSlug] = useState("")
  const {isAuthenticated} = useSelector((state) => state.auth)

  const handleSubmit= async (event)=>{
   try{ event.preventDefault();
  const shortUrl=await createShortUrl(url,customSlug);
   setShortUrl(shortUrl);
    queryClient.invalidateQueries({queryKey: ['userUrls']})
    setError(null)
   }catch (err) {
    console.log(err);
    if (err.data.status === 429) {
      setError({ message: " You’ve hit the request limit. Please try again after some time." });
    } else {
      setError({ message: err?.response?.data?.error || "Something went wrong. Please try again." });
    }
  }
  }
  
  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    
    // Reset the copied state after 2 seconds
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="url" className="block text-sm font-medium text-slate-300 mb-2">
            Enter your URL
          </label>
          <input
            type="url"
            id="url"
            value={url}
            onInput={(event)=>setUrl(event.target.value)}
            placeholder="https://example.com"
            required
            className="w-full rounded-2xl border border-slate-700 bg-slate-900/95 px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/60"
          />
        </div>
        
        <button
          type="submit"
          className="w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-slate-700 py-3 px-4 text-sm font-semibold text-white shadow-lg shadow-cyan-500/10 transition hover:from-cyan-400 hover:to-slate-600 disabled:opacity-50"
        >Shorten URL
        </button>
        {error && (
          <div className="mt-4 rounded-2xl border border-rose-500/20 bg-rose-900/90 p-3 text-sm text-rose-200">
            {error.message}
          </div>
        )}
       
        {shortUrl && (
          <div className="mt-6 rounded-3xl border border-slate-800/70 bg-slate-950/90 p-4 shadow-inner shadow-slate-950/20">
            <h2 className="text-lg font-semibold text-slate-100 mb-3">Your shortened URL:</h2>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <input
                type="text"
                readOnly
                value={shortUrl}
                className="flex-1 rounded-2xl border border-slate-700 bg-slate-900/95 px-4 py-3 text-slate-100"
              />
               <button
                onClick={handleCopy}
                className={`rounded-2xl px-5 py-3 text-sm font-semibold transition ${copied ? 'bg-emerald-500 text-slate-950 hover:bg-emerald-400' : 'bg-slate-800 text-slate-100 hover:bg-slate-700'}`}
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>
        )}
            
               
        </form>
        )
}
export default Urlform1;
