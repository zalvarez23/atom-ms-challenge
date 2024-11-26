"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskUseCase = void 0;
const task_entity_1 = require("../../domain/tasks/task.entity");
class TaskUseCase {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    async createTask(title, description, userId) {
        const newTask = new task_entity_1.Task("", title, description, userId);
        await this.taskRepository.createTask(newTask);
    }
    async getTasksByUserId(userId) {
        return this.taskRepository.getTasksByUserId(userId);
    }
    async updateTask(task) {
        this.taskRepository.updateTask(task);
    }
    async deleteTask(taskId) {
        this.taskRepository.deleteTask(taskId);
    }
}
exports.TaskUseCase = TaskUseCase;
