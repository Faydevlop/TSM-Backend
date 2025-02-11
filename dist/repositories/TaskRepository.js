"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskRepository = void 0;
const Task_1 = __importDefault(require("../models/Task"));
class TaskRepository {
    createTask(taskData) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('task data', taskData);
            return yield Task_1.default.create(taskData);
        });
    }
    getAllTasks() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Task_1.default.find().populate("assignedTo", "name");
        });
    }
    getTaskById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Task_1.default.findById(id);
        });
    }
    getTasksByUserId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Task_1.default.find({ assignedTo: id });
        });
    }
    updateTask(id, updatedData) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Task_1.default.findByIdAndUpdate(id, updatedData, { new: true });
        });
    }
    deleteTask(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Task_1.default.findByIdAndDelete(id);
        });
    }
}
exports.TaskRepository = TaskRepository;
exports.default = new TaskRepository();
