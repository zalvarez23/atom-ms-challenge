"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, email, createdAt = new Date()) {
        this.id = id;
        this.email = email;
        this.createdAt = createdAt;
    }
}
exports.User = User;
