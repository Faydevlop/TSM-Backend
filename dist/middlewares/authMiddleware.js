"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authMiddleware = (req, res, next) => {
    var _a;
    const token = (_a = req.header("Authorization")) === null || _a === void 0 ? void 0 : _a.split(" ")[1]; // Extract token from Bearer scheme
    if (!token) {
        console.log('error is here');
        res.status(401).json({ message: "Access Denied: No token provided" });
        return;
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, 'pineapple');
        req.user = decoded; // Attach decoded user to request
        console.log('error is here');
        next(); // Proceed to the next middleware/controller
    }
    catch (error) {
        res.status(401).json({ message: "Invalid or expired token" });
        console.log('error is here');
        return;
    }
};
exports.authMiddleware = authMiddleware;
