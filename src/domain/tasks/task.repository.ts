import { Task } from "./task.entity";

export interface TaskRepository {
  getTasksByUserId(userId: string): Promise<Task[]>;
  createTask(task: Task): Promise<void>;
  updateTask(task: Task): Promise<void>;
  deleteTask(id: string): Promise<void>;
}
