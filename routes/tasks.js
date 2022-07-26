import { Router } from "express";
import {
  getAllTasks,
  getTask,
  addTask,
  updatTask,
  deleteTask,
} from "../controllers/task.controller.js";
const router = Router();

router.get("/tasks", getAllTasks);
router.get("/task/:id", getTask);
router.post("/task", addTask);
router.put("/task/:id", updatTask);
router.delete("/task/:id", deleteTask);

export const routes = router;
