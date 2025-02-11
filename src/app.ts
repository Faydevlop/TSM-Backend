import express from "express";
import cors from "cors";
import helmet from "helmet";
import taskRoutes from "./routes/taskRoutes";
import userRoutes from "./routes/userRoutes";
import adminRoutes from "./routes/adminRoutes";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
      origin: "*",
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization"], 
    })
  );
  
app.use(helmet());



app.use("/api/tasks", taskRoutes);
app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);

export default app;
