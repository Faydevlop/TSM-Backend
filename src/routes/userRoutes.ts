import express from "express";
import { loginUser, registerUser, verifyOTP } from "../controllers/UserController";

const router = express.Router();
// Auth Route for All Users
router.post("/register", registerUser);
router.post("/verify-otp", verifyOTP);
router.post("/login", loginUser);




export default router;