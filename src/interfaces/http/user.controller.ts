import { Request, Response } from "express";
import { UserUseCase } from "../../appliation/users/user.usecase";

export class UserController {
  constructor(private userUseCase: UserUseCase) {}

  async saveUser(req: Request, res: Response) {
    const { email } = req.body;
    const user = await this.userUseCase.createUser(email);
    res.status(201).json(user);
  }

  async findByEmail(req: Request, res: Response) {
    const { email } = req.params;
    try {
      const user = await this.userUseCase.findByEmail(email);
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
