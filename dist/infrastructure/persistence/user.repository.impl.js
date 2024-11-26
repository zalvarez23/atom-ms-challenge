"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirestoreUserRepository = void 0;
const user_entity_1 = require("../../domain/users/user.entity");
const firestore_1 = require("./firestore");
class FirestoreUserRepository {
    async findByEmail(email) {
        try {
            const userRecord = await firestore_1.auth.getUserByEmail(email);
            return new user_entity_1.User(userRecord.uid, userRecord.email || "");
        }
        catch (error) {
            if (error.code === "auth/user-not-found") {
                return null;
            }
            throw error;
        }
    }
    async createUser(user) {
        try {
            const userRecord = await firestore_1.auth.createUser({
                email: user.email,
            });
            return new user_entity_1.User(userRecord.uid, userRecord.email || "");
        }
        catch (error) {
            console.error("Error al crear el usuario:", error);
            throw error;
        }
    }
}
exports.FirestoreUserRepository = FirestoreUserRepository;
