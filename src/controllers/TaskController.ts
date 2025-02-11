import { Request, Response } from "express";
import TaskService from "../services/TaskService";

class TaskController {
    async create(req: Request, res: Response) {
        console.log('req for create task',req.body);
        
        const task = await TaskService.createTask(req.body);
        res.status(201).json(task);
    }

    async getAll(req: Request, res: Response) {
        const tasks = await TaskService.getTasks();
        res.json(tasks);
    }

    async getById(req: Request, res: Response) {
        const task = await TaskService.getTask(req.params.id);
        res.json(task);
    }

    async getTaskByUserId(req:Request,res:Response){
        try {
            const id = req.params.id
            const response = await TaskService.getTasksByUserId(id)
            res.json(response)
    
        } catch (error) {
            
        }
      }

    async update(req: Request, res: Response) {
        const updatedTask = await TaskService.updateTask(req.params.id, req.body);
        res.json(updatedTask);
    }

    async delete(req: Request, res: Response) {
        await TaskService.deleteTask(req.params.id);
        res.status(204).send();
    }
}

export default new TaskController();
