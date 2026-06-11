import shorturl from "../models/shorturl.model.js";
import { ConflictError } from "../utils/errorhandler.js";

export const saveShortUrl = async (shortUrl, longUrl, userId) => {
  try {
    const newUrl = new shorturl({
      full_url: longUrl,
      short_url: shortUrl,
    });

    if (userId) {
      newUrl.user = userId;
    }

    await newUrl.save();
  } catch (err) {
    if (err.code === 11000) throw new ConflictError("Short URL already exists");
    throw err;
  }
};

export const findUrlfromShortUrl = async (id, incrementClicks = true) => {
  if (incrementClicks) {
    return await shorturl.findOneAndUpdate({ short_url: id }, { $inc: { clicks: 1 } }, { new: true });
  }
  return await shorturl.findOne({ short_url: id });
};

export const incrementClicks = async (id) => {
  return await shorturl.findOneAndUpdate({ short_url: id }, { $inc: { clicks: 1 } }, { new: true });
};

export const getCustomShortUrl = async (slug) => {
  return await shorturl.findOne({ short_url: slug });
};
