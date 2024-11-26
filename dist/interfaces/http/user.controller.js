"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
class UserController {
    constructor(userUseCase) {
        this.userUseCase = userUseCase;
    }
    async saveUser(req, res) {
        const { email } = req.body;
        const user = await this.userUseCase.createUser(email);
        res.status(201).json(user);
    }
    async findByEmail(req, res) {
        const { email } = req.params;
        try {
            const user = await this.userUseCase.findByEmail(email);
            if (user) {
                res.status(200).json(user);
            }
            else {
                res.status(404).json({ message: "User not found" });
            }
        }
        catch (error) {
            console.error("Error fetching user:", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
}
exports.UserController = UserController;
