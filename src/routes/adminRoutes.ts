import { Router } from "express";
import AdminController from "../controllers/adminController";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = Router();

router.get("/users",AdminController.getAllUsers);
router.get("/dashboard", AdminController.getAdminDashboard);
router.get("/users/:id", AdminController.getUserById);
router.put("/users/:id", AdminController.updateUser);
router.delete("/users/:id", AdminController.deleteUser);

export default router;