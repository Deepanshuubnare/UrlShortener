import rateLimit from 'express-rate-limit';

export const ipLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 15,                  // 10 requests per IP
  message: {
    status: 429,
    error: "Too many requests from this IP. Please try again in an hour.",
  },
});
