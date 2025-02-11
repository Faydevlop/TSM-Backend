"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserController_1 = require("../controllers/UserController");
const router = express_1.default.Router();
// Auth Route for All Users
router.post("/register", UserController_1.registerUser);
router.post("/verify-otp", UserController_1.verifyOTP);
router.post("/login", UserController_1.loginUser);
exports.default = router;
