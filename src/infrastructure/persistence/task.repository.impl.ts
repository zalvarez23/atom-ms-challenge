import { TaskRepository } from "../../domain/tasks/task.repository";
import { Task } from "../../domain/tasks/task.entity";
import { firestore } from "./firestore"; // Conexión a Firestore

export class FirestoreTaskRepository implements TaskRepository {
  async getTasksByUserId(userId: string): Promise<Task[]> {
    const snapshot = await firestore
      .collection("tasks")
      .where("userId", "==", userId)
      .orderBy("createdAt", "desc")
      .get();

    return snapshot.docs.map((doc) => {
      const data = doc.data();
      return new Task(
        doc.id,
        data.title,
        data.description,
        data.userId,
        data.createdAt,
        data.completed
      );
    });
  }

  async createTask(task: Task): Promise<void> {
    await firestore.collection("tasks").add({
      title: task.title,
      description: task.description,
      createdAt: task.createdAt,
      completed: task.completed,
      userId: task.userId,
    });
  }

  async updateTask(task: Task): Promise<void> {
    const taskRef = firestore.collection("tasks").doc(task.id);
    await taskRef.update({
      title: task.title,
      description: task.description,
      completed: task.completed,
    });
  }

  async deleteTask(taskId: string): Promise<void> {
    const taskRef = firestore.collection("tasks").doc(taskId);
    await taskRef.delete();
  }
}
