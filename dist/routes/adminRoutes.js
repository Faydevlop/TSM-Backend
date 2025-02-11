"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const adminController_1 = __importDefault(require("../controllers/adminController"));
const router = (0, express_1.Router)();
router.get("/users", adminController_1.default.getAllUsers);
router.get("/dashboard", adminController_1.default.getAdminDashboard);
router.get("/users/:id", adminController_1.default.getUserById);
router.put("/users/:id", adminController_1.default.updateUser);
router.delete("/users/:id", adminController_1.default.deleteUser);
exports.default = router;
