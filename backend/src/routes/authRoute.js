import express from 'express'
import { getCurrUser, login_user, logout_user, register_user } from '../controller/auth.controller.js';
import { authMiddleware } from '../middleware/auth.middleware.js';
const router =express.Router();

router.post("/register",register_user);
router.post("/login",login_user);
router.get("/logout",logout_user);
router.get("/me",authMiddleware,getCurrUser)

export default router;
