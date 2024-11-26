"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = exports.firestore = void 0;
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const serviceAccountKey_json_1 = __importDefault(require("./../../config/serviceAccountKey.json"));
firebase_admin_1.default.initializeApp({
    credential: firebase_admin_1.default.credential.cert(serviceAccountKey_json_1.default),
});
const firestore = firebase_admin_1.default.firestore();
exports.firestore = firestore;
const auth = firebase_admin_1.default.auth();
exports.auth = auth;
