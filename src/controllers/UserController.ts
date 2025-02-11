import { Request, Response } from "express";
import { UserService } from "../services/userService";

const userService = new UserService();

export const registerUser = async(req:Request,res:Response)=>{
    try {
        const {name,email,password} = req.body;
        console.log('req is here');
        
        
        
        const response = await userService.registerUser(name,email,password);
        res.status(201).json(response)

    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
}

export const verifyOTP = async (req: Request, res: Response) => {
    try {
      const { email, otp } = req.body;
      console.log("Received Request Body:", req.body)
      const response = await userService.verifyOTP(email, otp);
      res.status(200).json(response);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };

  

export const loginUser = async(req:Request,res:Response)=>{
    try {
        const {email,password} = req.body;
        const response = await userService.loginUser(email,password);
        res.status(200).json(response)
        
    } catch (error:any) {
        res.status(400).json({ error: error.message });
    }
}