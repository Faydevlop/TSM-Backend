import { userRepositary } from "../repositories/userRepository";
import bcrypt from "bcryptjs";

const userRepo = new userRepositary();

class AdminService {
    async getAllUsers() {
        return await userRepo.getAllUsers();
    }


    async getUserById(userId: string) {
        return await userRepo.findUserById(userId);
    }

    async updateUser(userId: string, updateData: any) {
      console.log('req is here to update');
      
        return await userRepo.updateUser(updateData.email, updateData);
    }

    async deleteUser(userId: string) {
        return await userRepo.deleteUser(userId);
    }
}

export default new AdminService();