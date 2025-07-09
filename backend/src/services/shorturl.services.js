import { getCustomShortUrl, saveShortUrl } from "../dao/shorturl.js";
import { generateNanoId } from "../utils/helper.js";

export const createShortUrlWithoutUser=async (url)=>{
const shortUrl=await generateNanoId(7);
if(!shortUrl) throw new Error("ShortUrl is not generated!");
   await saveShortUrl(shortUrl,url);
   return shortUrl;
}
export const createShortUrlWithUser=async (url,userId,slug=null)=>{
const shortUrl=slug || generateNanoId(7);
console.log(shortUrl);
const exist= await getCustomShortUrl(slug);
if(exist) throw new Error("This custom url already exists")
   await saveShortUrl(shortUrl,url,userId);
   return shortUrl;
}