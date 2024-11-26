import { User } from "./user.entity";

export interface UserRepository {
  findByEmail(email: string): Promise<User | null>;
  createUser(user: User): Promise<User | null>;
}
