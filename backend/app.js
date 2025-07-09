import express from "express";
import dotenv from "dotenv";
dotenv.config("./.env");
import connectDB from "./src/config/mongo.config.js";
import shortUrl from "./src/routes/shorturl.route.js"
import authRoutes from "./src/routes/authRoute.js"
import userRoutes from "./src/routes/user.route.js"
import { redirectFromShortUrl } from "./src/controller/shorturl.controller.js";
import { errorHandler } from "./src/utils/errorhandler.js";
import cookieParser from "cookie-parser";
const app=express();
const port =process.env.PORT || 4000;
import cors from 'cors';
import { attachUser } from "./src/utils/attachUser.js";
app.use(cors({
  origin:"https://urlshortener-frontend-jjhq.onrender.com",
  credentials:true
}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(attachUser)
app.use("/api/create",shortUrl);
app.get("/:id",redirectFromShortUrl)
app.use("/api/auth",authRoutes);
app.use("/api/user",userRoutes)
app.use(errorHandler);
app.listen(port,()=>{
    connectDB();
    console.log("app is listening on the port!")
})
// get-redirect
// post- create shorturl
