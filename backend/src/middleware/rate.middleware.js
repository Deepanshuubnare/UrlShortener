import { redisClient } from "../config/redis.config.js";

const WINDOW_SECONDS = 60 * 60; // 1 hour
const MAX_REQUESTS = 15;

export const ipLimiter = async (req, res, next) => {
  try {
    const key = `rate_limit:create:${req.ip}`;
    const current = await redisClient.incr(key);
    if (current === 1) {
      await redisClient.expire(key, WINDOW_SECONDS);
    }

    if (current > MAX_REQUESTS) {
      return res.status(429).json({
        status: 429,
        error: "Too many requests from this IP. Please try again in an hour.",
      });
    }

    next();
  } catch (err) {
    next(err);
  }
};
