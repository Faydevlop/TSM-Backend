"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TaskController_1 = __importDefault(require("../controllers/TaskController"));
const router = (0, express_1.Router)();
router.post("/", TaskController_1.default.create);
router.get("/", TaskController_1.default.getAll);
router.get("/byuser/:id", TaskController_1.default.getTaskByUserId);
router.get("/:id", TaskController_1.default.getById);
router.put("/:id", TaskController_1.default.update);
router.delete("/:id", TaskController_1.default.delete);
exports.default = router;
