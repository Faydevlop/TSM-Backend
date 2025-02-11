import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
// import { config } from "../config/config"; // Ensure you have JWT_SECRET defined in your config

// Extend Request type to include user
interface AuthRequest extends Request {
  user?: any;
}

export const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction): void => {
  const token = req.header("Authorization")?.split(" ")[1]; // Extract token from Bearer scheme

  if (!token) {
    console.log('error is here');
    res.status(401).json({ message: "Access Denied: No token provided" });
    return;
  }

  try {
    const decoded = jwt.verify(token, 'pineapple');
    req.user = decoded; // Attach decoded user to request
    console.log('error is here');
    next(); // Proceed to the next middleware/controller
  } catch (error) {
    res.status(401).json({ message: "Invalid or expired token" });
    console.log('error is here');
    
    return;
  }
};
