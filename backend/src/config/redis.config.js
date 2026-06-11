import { createClient } from "redis";

const redisUrl = process.env.REDIS_URL || `redis://${process.env.REDIS_HOST || "127.0.0.1"}:${process.env.REDIS_PORT || 6379}`;

const clientOptions = { url: redisUrl };

console.log('Redis config: using URL ->', redisUrl);

// If user explicitly requests TLS or the URL uses rediss://, enable socket TLS
if (process.env.REDIS_TLS === "true" || String(redisUrl).startsWith("rediss://")) {
  clientOptions.socket = {
    tls: true,
    // Allow opting out of strict cert checks (not recommended in production)
    rejectUnauthorized: process.env.REDIS_REJECT_UNAUTHORIZED !== "false",
  };
}

export const redisClient = createClient(clientOptions);

redisClient.on("error", (err) => {
  console.error("Redis Client Error", err);
});

export const connectRedis = async () => {
  if (!redisClient.isOpen) {
    await redisClient.connect();
  }
};
