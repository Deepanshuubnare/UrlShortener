import express from "express";
import { createShortUrl,createCustomShortUrl } from "../controller/shorturl.controller.js";
import { ipLimiter } from "../middleware/rate.middleware.js";
const router=express.Router();

router.post("/",ipLimiter,createShortUrl);

export default router;
