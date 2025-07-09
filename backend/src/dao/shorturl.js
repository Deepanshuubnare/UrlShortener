import shorturl from "../models/shorturl.model.js";
import { ConflictError } from "../utils/errorhandler.js";

export const saveShortUrl=async (shortUrl,longUrl,userId)=>{
    try{
    const newUrl=new shorturl({
        full_url:longUrl,
        short_url:shortUrl,
    })
    if(userId){
        newUrl.user=userId
    }
    await newUrl.save();
}catch(err){
    if(err.code==11000) throw new ConflictError(err);
   throw new Error(err)
}
}
export const findUrlfromShortUrl=async (id)=>{
    return await shorturl.findOneAndUpdate({short_url:id},{$inc:{clicks:1}});
}
export const getCustomShortUrl=async (slug)=>{
    return await shorturl.findOne({short_url:slug});
  
}