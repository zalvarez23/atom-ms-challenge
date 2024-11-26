"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
class Task {
    constructor(id, title, description, userId, createdAt = new Date(), completed = false) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.userId = userId;
        this.createdAt = createdAt;
        this.completed = completed;
    }
    toggleCompleted() {
        this.completed = !this.completed;
    }
}
exports.Task = Task;
