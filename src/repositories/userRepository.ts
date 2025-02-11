import User, { IUser } from "../models/User";

export class userRepositary{
    async createUser(userData:Partial<IUser>):Promise<IUser>{
        return await User.create(userData)
    }

    async findUserByEmail(email:string):Promise<IUser | null>{
        return await User.findOne({email})
    }

    async updateUser(userId:string,updateData:Partial<IUser>){
        console.log(userId,updateData);
        
        return await User.findOneAndUpdate({email:userId},updateData,{new:true})
    }

    async findUserById(userId: string): Promise<IUser | null> {
        return await User.findById(userId);
    }

    async getAllUsers(): Promise<IUser[]> {
        return await User.find();
    }

    
    async deleteUser(userId: string): Promise<IUser | null> {
        return await User.findByIdAndDelete(userId);
    }

}