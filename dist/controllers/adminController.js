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
const adminService_1 = __importDefault(require("../services/adminService"));
const userRepository_1 = require("../repositories/userRepository");
const TaskRepository_1 = require("../repositories/TaskRepository");
const User_1 = __importDefault(require("../models/User"));
const Task_1 = __importDefault(require("../models/Task"));
const userRepo = new userRepository_1.userRepositary();
const taskRepo = new TaskRepository_1.TaskRepository();
class AdminController {
    getAllUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield adminService_1.default.getAllUsers();
            res.json(users);
        });
    }
    getUserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('req is here :', req.params.id);
            const user = yield adminService_1.default.getUserById(req.params.id);
            console.log(user, 'je;;p');
            res.json(user);
        });
    }
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedUser = yield adminService_1.default.updateUser(req.params.id, req.body);
            res.json(updatedUser);
        });
    }
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield adminService_1.default.deleteUser(req.params.id);
            res.status(204).send();
        });
    }
    getAdminDashboard(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userCount = yield User_1.default.find();
            const taskCount = yield Task_1.default.find();
            console.log('req is here:', userCount, taskCount);
            res.json({ users: userCount, tasks: taskCount });
        });
    }
}
exports.default = new AdminController();
