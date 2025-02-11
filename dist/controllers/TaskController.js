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
const TaskService_1 = __importDefault(require("../services/TaskService"));
class TaskController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('req for create task', req.body);
            const task = yield TaskService_1.default.createTask(req.body);
            res.status(201).json(task);
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const tasks = yield TaskService_1.default.getTasks();
            res.json(tasks);
        });
    }
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const task = yield TaskService_1.default.getTask(req.params.id);
            res.json(task);
        });
    }
    getTaskByUserId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const response = yield TaskService_1.default.getTasksByUserId(id);
                res.json(response);
            }
            catch (error) {
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedTask = yield TaskService_1.default.updateTask(req.params.id, req.body);
            res.json(updatedTask);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield TaskService_1.default.deleteTask(req.params.id);
            res.status(204).send();
        });
    }
}
exports.default = new TaskController();
