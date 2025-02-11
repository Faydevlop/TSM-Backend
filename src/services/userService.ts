import bcrypt from "bcryptjs";
import { userRepositary } from "../repositories/userRepository";
import { sendOTP } from "../config/nodemailer";
import { generateOTP } from "../utils/generateOTP";
import { generateToken } from "../utils/generateToken";

const userRepo = new userRepositary();

export class UserService{
    async registerUser(name:string,email:string,password:string){
        const existingUser = await userRepo.findUserByEmail(email);
        if (existingUser) throw new Error("User already exists")

            const hashedPassword = await bcrypt.hash(password, 10);
            const otp = generateOTP();
        
            const user = await userRepo.createUser({
              name,
              email,
              password: hashedPassword,
              otp,
              isVerified: false,
            });
        
            await sendOTP(email, otp);
            return { message: "OTP sent to email",email:user.email };
    }


    async verifyOTP(email: string, otp: string) {
        const user = await userRepo.findUserByEmail(email);
        if (!user) throw new Error("User not found");
    
        if (user.otp !== otp) throw new Error("Invalid OTP");
    
        await userRepo.updateUser(email, { isVerified: true, otp: "" });
        const token = generateToken(user._id.toString());
        
        return { message: "User verified",user, token };
      }

      async loginUser (email:string,password:string){
        const user = await userRepo.findUserByEmail(email);
        if (!user) throw new Error("User not Found");

        if(!user.isVerified) throw new Error("User Not Registered Please Signup ")

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) throw new Error("Invalid credentials");
        
        const token = generateToken(user._id);
        return { message: "Login successful", user,token };
      }

      
}