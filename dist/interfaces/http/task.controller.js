"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskController = void 0;
class TaskController {
    constructor(taskUseCase) {
        this.taskUseCase = taskUseCase;
    }
    async getTasksByUserId(req, res) {
        const { authorization: userId } = req.headers;
        const tasks = await this.taskUseCase.getTasksByUserId(userId || "");
        res.json(tasks);
    }
    async createTask(req, res) {
        const { title, description } = req.body;
        const { authorization: userId } = req.headers;
        await this.taskUseCase.createTask(title, description, userId || "");
        res.status(201).send({
            status: "success",
            message: "Task created successfully",
        });
    }
    async updateTask(req, res) {
        await this.taskUseCase.updateTask({ ...req.body });
        res.status(200).send({
            status: "success",
            message: "Task updated successfully",
        });
    }
    async deleteTask(req, res) {
        const { id: taskId } = req.params;
        await this.taskUseCase.deleteTask(taskId);
        res.status(200).send({
            status: "success",
            message: "Task deleted successfully",
        });
    }
}
exports.TaskController = TaskController;
