import { Request, Response } from "express";
import { TaskUseCase } from "../../appliation/task/task.usecase";

export class TaskController {
  constructor(private taskUseCase: TaskUseCase) {}

  async getTasksByUserId(req: Request, res: Response) {
    const { authorization: userId } = req.headers;
    const tasks = await this.taskUseCase.getTasksByUserId(userId || "");
    res.json(tasks);
  }

  async createTask(req: Request, res: Response) {
    const { title, description } = req.body;
    const { authorization: userId } = req.headers;

    await this.taskUseCase.createTask(title, description, userId || "");
    res.status(201).send({
      status: "success",
      message: "Task created successfully",
    });
  }

  async updateTask(req: Request, res: Response) {
    await this.taskUseCase.updateTask({ ...req.body });
    res.status(200).send({
      status: "success",
      message: "Task updated successfully",
    });
  }

  async deleteTask(req: Request, res: Response) {
    const { id: taskId } = req.params;
    await this.taskUseCase.deleteTask(taskId);
    res.status(200).send({
      status: "success",
      message: "Task deleted successfully",
    });
  }
}
