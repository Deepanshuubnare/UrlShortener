import React, { useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { QueryClient } from '@tanstack/react-query'
import { createShortUrl } from '../api/shorturlapi';
import { queryClient } from '../main.jsx'
import QRCodeDisplay from './QRCodeDisplay.jsx';
export const Urlform = () => {
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
    <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-1">
            Enter your URL
          </label>
          <input
            type="url"
            id="url"
            value={url}
            onInput={(event)=>setUrl(event.target.value)}
            placeholder="https://example.com"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
        >Shorten URL
        </button>
        {error && (
          <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
            {error.message}
          </div>
        )}
       
        {isAuthenticated && (
          <div className="mt-4">
            <label htmlFor="customSlug" className="block text-sm font-medium text-gray-700 mb-1">
              Custom URL (optional)
            </label>
            <input
              type="text"
              id="customSlug"
              value={customSlug}
              onChange={(event) => setCustomSlug(event.target.value)}
              placeholder="Enter custom slug"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        )}
        {shortUrl && (
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2">Your shortened URL:</h2>
            <div className="flex items-center">
              <input
                type="text"
                readOnly
                value={shortUrl}
                className="flex-1 p-2 border border-gray-300 rounded-l-md bg-gray-50"
              />
               <button
                onClick={handleCopy}
                className={`px-4 py-2 rounded-r-md transition-colors duration-200 ${
                  copied 
                    ? 'bg-green-500 text-white hover:bg-green-600' 
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
            </div>
        )}
            { /* QR Code below the URL */}
              {isAuthenticated && (
       <div className="mt-4 flex justify-center">
        <QRCodeDisplay url={shortUrl} />
      </div>
      )}
        </form>
        )
}
export default Urlform
