import Task, { ITask } from "../models/Task";

export class TaskRepository {
    async createTask(taskData: Partial<ITask> ) {
        console.log('task data',taskData);
        
        return await Task.create( taskData);
    }

    async getAllTasks() {
        return await Task.find().populate("assignedTo", "name");
    }
    

    async getTaskById(id: string) {
        return await Task.findById(id);
    }

    async getTasksByUserId(id:string) {
        return await Task.find({assignedTo:id})
        
    }

    async updateTask(id: string, updatedData: Partial<ITask>) {
        return await Task.findByIdAndUpdate(id, updatedData, { new: true });
    }

    async deleteTask(id: string) {
        return await Task.findByIdAndDelete(id);
    }
}

export default new TaskRepository();
