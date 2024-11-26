"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUseCase = void 0;
const user_entity_1 = require("../../domain/users/user.entity");
class UserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async createUser(email) {
        const newUser = new user_entity_1.User("", email);
        return await this.userRepository.createUser(newUser);
    }
    async findByEmail(email) {
        return await this.userRepository.findByEmail(email);
    }
}
exports.UserUseCase = UserUseCase;
