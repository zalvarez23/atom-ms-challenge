import { TaskRepository } from "../../domain/tasks/task.repository";
import { Task } from "../../domain/tasks/task.entity";

export class TaskUseCase {
  constructor(private taskRepository: TaskRepository) {}

  async createTask(
    title: string,
    description: string,
    userId: string
  ): Promise<void> {
    const newTask = new Task("", title, description, userId);
    await this.taskRepository.createTask(newTask);
  }

  async getTasksByUserId(userId: string): Promise<Task[]> {
    return this.taskRepository.getTasksByUserId(userId);
  }

  async updateTask(task: Task): Promise<void> {
    this.taskRepository.updateTask(task);
  }

  async deleteTask(taskId: string): Promise<void> {
    this.taskRepository.deleteTask(taskId);
  }

  // Otros casos de uso, como actualizar y eliminar...
}
