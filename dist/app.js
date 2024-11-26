"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const task_repository_impl_1 = require("./infrastructure/persistence/task.repository.impl");
const task_usecase_1 = require("./appliation/task/task.usecase");
const task_controller_1 = require("./interfaces/http/task.controller");
const user_controller_1 = require("./interfaces/http/user.controller");
const user_repository_impl_1 = require("./infrastructure/persistence/user.repository.impl");
const user_usecase_1 = require("./appliation/users/user.usecase");
const app = (0, express_1.default)();
// Configuración de CORS
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Repositories
const taskRepository = new task_repository_impl_1.FirestoreTaskRepository();
const userRepository = new user_repository_impl_1.FirestoreUserRepository();
// Cases
const taskUseCase = new task_usecase_1.TaskUseCase(taskRepository);
const userUseCase = new user_usecase_1.UserUseCase(userRepository);
// Controllers
const taskController = new task_controller_1.TaskController(taskUseCase);
const userController = new user_controller_1.UserController(userUseCase);
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
