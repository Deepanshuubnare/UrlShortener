import { findUrlfromShortUrl, incrementClicks } from "../dao/shorturl.js";
import { createShortUrlWithoutUser, createShortUrlWithUser } from "../services/shorturl.services.js";
import wrapAsync from "../utils/tryCatchWrapper.js";
import { redisClient } from "../config/redis.config.js";

const normalizeShortUrl = (shortUrl) => shortUrl.replace(/^\/+|\/+$/g, "");
const buildShortUrl = (shortUrl) => {
  const baseUrl = (process.env.APP_URL || "https://urlshortener-okv9.onrender.com").replace(/\/+$/g, "");
  return `${baseUrl}/${normalizeShortUrl(shortUrl)}`;
};

export const createShortUrl = wrapAsync(async (req, res) => {
  const data = req.body;
  let shortUrl;

  if (req.user) {
    shortUrl = await createShortUrlWithUser(data.url, req.user._id, data.slug);
  } else {
    shortUrl = await createShortUrlWithoutUser(data.url, data.slug);
  }

  res.status(200).json({ shortUrl: buildShortUrl(shortUrl) });
});

export const redirectFromShortUrl = wrapAsync(async (req, res) => {
  const { id } = req.params;
  const cacheKey = `shorturl:${id}`;
  const cached = await redisClient.get(cacheKey);

  if (cached) {
    const url = JSON.parse(cached);
    await incrementClicks(id);
    return res.redirect(url.full_url);
  }

  const url = await findUrlfromShortUrl(id, true);
  if (!url) throw new Error("short Url not found");

  await redisClient.set(cacheKey, JSON.stringify({ full_url: url.full_url }), { EX: 60 * 60 * 24 });
  res.redirect(url.full_url);
});

export const createCustomShortUrl = wrapAsync(async (req, res) => {
  const { url, slug } = req.body;
  const shortUrl = await createShortUrlWithUser(url, null, slug);
  res.status(200).json({ shortUrl: buildShortUrl(shortUrl) });
});

