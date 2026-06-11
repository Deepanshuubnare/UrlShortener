import 'dotenv/config';
import express from "express";
import connectDB from "./src/config/mongo.config.js";
import { connectRedis } from "./src/config/redis.config.js";
import shortUrl from "./src/routes/shorturl.route.js";
import authRoutes from "./src/routes/authRoute.js";
import userRoutes from "./src/routes/user.route.js";
import { redirectFromShortUrl } from "./src/controller/shorturl.controller.js";
import { errorHandler } from "./src/utils/errorhandler.js";
import cookieParser from "cookie-parser";
import cors from 'cors';
import { attachUser } from "./src/utils/attachUser.js";

const app = express();
const port = process.env.PORT || 4000;

const allowedOrigins = [process.env.FRONTEND_URL, "http://localhost:5173", "http://127.0.0.1:5173"].filter(Boolean);
app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) return callback(null, true);
    return callback(new Error('CORS policy: origin not allowed'));
  },
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(attachUser);
app.use("/api/create", shortUrl);
app.get("/:id", redirectFromShortUrl);
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use(errorHandler);

const start = async () => {
  await connectDB();
  await connectRedis();
  app.listen(port, () => {
    console.log("app is listening on the port!");
  });
};

start();
// get-redirect
// post- create shorturl
