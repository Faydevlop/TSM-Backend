import TaskRepository from "../repositories/TaskRepository";
import { ITask } from "../models/Task";

class TaskService {
    async createTask(taskData: Partial<ITask>) { 
        return await TaskRepository.createTask(taskData);
    }

    async getTasks() {
        return await TaskRepository.getAllTasks();
    }

    async getTask(id: string) {
        return await TaskRepository.getTaskById(id);
    }

    async getTasksByUserId(id:string){
        return await TaskRepository.getTasksByUserId(id)
    }

    async updateTask(id: string, taskData: Partial<ITask>) {
        return await TaskRepository.updateTask(id, taskData);
    }

    async deleteTask(id: string) {
        return await TaskRepository.deleteTask(id);
    }
}

export default new TaskService();
