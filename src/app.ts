import express from "express";
import cors from "cors";
import { FirestoreTaskRepository } from "./infrastructure/persistence/task.repository.impl";
import { TaskUseCase } from "./appliation/task/task.usecase";
import { TaskController } from "./interfaces/http/task.controller";
import { UserController } from "./interfaces/http/user.controller";
import { FirestoreUserRepository } from "./infrastructure/persistence/user.repository.impl";
import { UserUseCase } from "./appliation/users/user.usecase";

const app = express();

// Configuración de CORS
app.use(cors());

app.use(express.json());

// Repositories
const taskRepository = new FirestoreTaskRepository();
const userRepository = new FirestoreUserRepository();

// Cases
const taskUseCase = new TaskUseCase(taskRepository);
const userUseCase = new UserUseCase(userRepository);

// Controllers
const taskController = new TaskController(taskUseCase);
const userController = new UserController(userUseCase);

// Routes
app.get("/tasks", taskController.getTasksByUserId.bind(taskController));
app.post("/tasks", taskController.createTask.bind(taskController));
app.put("/tasks/:id", taskController.updateTask.bind(taskController));
app.delete("/tasks/:id", taskController.deleteTask.bind(taskController));
app.post("/users", userController.saveUser.bind(userController));
app.get("/users/:email", userController.findByEmail.bind(userController));

// Init server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
