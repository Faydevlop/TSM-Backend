"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const userRepository_1 = require("../repositories/userRepository");
const nodemailer_1 = require("../config/nodemailer");
const generateOTP_1 = require("../utils/generateOTP");
const generateToken_1 = require("../utils/generateToken");
const userRepo = new userRepository_1.userRepositary();
class UserService {
    registerUser(name, email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const existingUser = yield userRepo.findUserByEmail(email);
            if (existingUser)
                throw new Error("User already exists");
            const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
            const otp = (0, generateOTP_1.generateOTP)();
            const user = yield userRepo.createUser({
                name,
                email,
                password: hashedPassword,
                otp,
                isVerified: false,
            });
            yield (0, nodemailer_1.sendOTP)(email, otp);
            return { message: "OTP sent to email", email: user.email };
        });
    }
    verifyOTP(email, otp) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield userRepo.findUserByEmail(email);
            if (!user)
                throw new Error("User not found");
            if (user.otp !== otp)
                throw new Error("Invalid OTP");
            yield userRepo.updateUser(email, { isVerified: true, otp: "" });
            const token = (0, generateToken_1.generateToken)(user._id.toString());
            return { message: "User verified", user, token };
        });
    }
    loginUser(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield userRepo.findUserByEmail(email);
            if (!user)
                throw new Error("User not Found");
            if (!user.isVerified)
                throw new Error("User Not Registered Please Signup ");
            const isMatch = yield bcryptjs_1.default.compare(password, user.password);
            if (!isMatch)
                throw new Error("Invalid credentials");
            const token = (0, generateToken_1.generateToken)(user._id);
            return { message: "Login successful", user, token };
        });
    }
}
exports.UserService = UserService;
