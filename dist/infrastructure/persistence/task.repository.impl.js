"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirestoreTaskRepository = void 0;
const task_entity_1 = require("../../domain/tasks/task.entity");
const firestore_1 = require("./firestore"); // Conexión a Firestore
class FirestoreTaskRepository {
    async getTasksByUserId(userId) {
        const snapshot = await firestore_1.firestore
            .collection("tasks")
            .where("userId", "==", userId)
            .orderBy("createdAt", "desc")
            .get();
        return snapshot.docs.map((doc) => {
            const data = doc.data();
            return new task_entity_1.Task(doc.id, data.title, data.description, data.userId, data.createdAt, data.completed);
        });
    }
    async createTask(task) {
        await firestore_1.firestore.collection("tasks").add({
            title: task.title,
            description: task.description,
            createdAt: task.createdAt,
            completed: task.completed,
            userId: task.userId,
        });
    }
    async updateTask(task) {
        const taskRef = firestore_1.firestore.collection("tasks").doc(task.id);
        await taskRef.update({
            title: task.title,
            description: task.description,
            completed: task.completed,
        });
    }
    async deleteTask(taskId) {
        const taskRef = firestore_1.firestore.collection("tasks").doc(taskId);
        await taskRef.delete();
    }
}
exports.FirestoreTaskRepository = FirestoreTaskRepository;
