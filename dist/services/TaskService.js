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
const TaskRepository_1 = __importDefault(require("../repositories/TaskRepository"));
class TaskService {
    createTask(taskData) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield TaskRepository_1.default.createTask(taskData);
        });
    }
    getTasks() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield TaskRepository_1.default.getAllTasks();
        });
    }
    getTask(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield TaskRepository_1.default.getTaskById(id);
        });
    }
    getTasksByUserId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield TaskRepository_1.default.getTasksByUserId(id);
        });
    }
    updateTask(id, taskData) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield TaskRepository_1.default.updateTask(id, taskData);
        });
    }
    deleteTask(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield TaskRepository_1.default.deleteTask(id);
        });
    }
}
exports.default = new TaskService();
