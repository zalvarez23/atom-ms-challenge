import { UserRepository } from "../../domain/users/user.repository";
import { User } from "../../domain/users/user.entity";

export class UserUseCase {
  constructor(private userRepository: UserRepository) {}

  async createUser(email: string): Promise<User | null> {
    const newUser = new User("", email);
    return await this.userRepository.createUser(newUser);
  }

  async findByEmail(email: string): Promise<User | null> {
    return await this.userRepository.findByEmail(email);
  }
}
