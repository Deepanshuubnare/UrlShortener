import { findUrlfromShortUrl } from "../dao/shorturl.js";
import { createShortUrlWithoutUser, createShortUrlWithUser } from "../services/shorturl.services.js";
import wrapAsync from "../utils/tryCatchWrapper.js";

export const createShortUrl=wrapAsync(async(req,res)=>{
   const data=req.body;
   console.log(data);
   let shortUrl
   if(req.user){
     shortUrl=await createShortUrlWithUser(data.url,req.user._id,data.slug);
   }else {
   shortUrl=await createShortUrlWithoutUser(data.url);
   }
    res.status(200).json({shortUrl: process.env.APP_URL+shortUrl});
} 
)

export const redirectFromShortUrl=wrapAsync(async(req,res)=>{
    const {id}=req.params;
        const url= await findUrlfromShortUrl(id);              // shorturl === urlSchema in tutorial 
        if(!url) throw new Error("short Url not found");
            res.redirect(url.full_url);  
     })

     export const createCustomShortUrl=wrapAsync(async(req,res)=>{
   const {url,slug}=req.body;
    const shortUrl=await createShortUrlWithUser(url,slug);
    res.status(200).json({shortUrl: process.env.APP_URL+shortUrl});
} 
)