import { Request, Response } from "express";
import AdminService from "../services/adminService";
import bcrypt from "bcryptjs";
import { userRepositary } from "../repositories/userRepository";
import {TaskRepository} from "../repositories/TaskRepository";
import UserModel from '../models/User'
import TaskModel from '../models/Task'

const userRepo = new userRepositary()
const taskRepo = new TaskRepository()

class AdminController {
    async getAllUsers(req: Request, res: Response) {
        const users = await AdminService.getAllUsers();
        res.json(users);
    }

    async getUserById(req: Request, res: Response) {
        console.log('req is here :',req.params.id);
        
        const user = await AdminService.getUserById(req.params.id);
        console.log(user,'je;;p');
        
        res.json(user);
    }

   

    async updateUser(req: Request, res: Response) {
        const updatedUser = await AdminService.updateUser(req.params.id, req.body);
        res.json(updatedUser);
    }

    async deleteUser(req: Request, res: Response) {
        await AdminService.deleteUser(req.params.id);
        res.status(204).send();
    }
    
    async getAdminDashboard(req:Request,res:Response) {
        const userCount = await UserModel.find()
        const taskCount = await TaskModel.find()
        console.log('req is here:',userCount,taskCount);
        

        res.json({users:userCount,tasks:taskCount})
    }
}

export default new AdminController();