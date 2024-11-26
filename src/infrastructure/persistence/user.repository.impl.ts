import { UserRepository } from "../../domain/users/user.repository";
import { User } from "../../domain/users/user.entity";
import { auth } from "./firestore";

export class FirestoreUserRepository implements UserRepository {
  async findByEmail(email: string): Promise<User | null> {
    try {
      const userRecord = await auth.getUserByEmail(email);
      return new User(userRecord.uid, userRecord.email || "");
    } catch (error: any) {
      if (error.code === "auth/user-not-found") {
        return null;
      }
      throw error;
    }
  }

  async createUser(user: User): Promise<User | null> {
    try {
      const userRecord = await auth.createUser({
        email: user.email,
      });
      return new User(userRecord.uid, userRecord.email || "");
    } catch (error) {
      console.error("Error al crear el usuario:", error);
      throw error;
    }
  }
}
