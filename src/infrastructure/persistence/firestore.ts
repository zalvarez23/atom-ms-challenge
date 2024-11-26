import admin from "firebase-admin";
import { ServiceAccount } from "firebase-admin";

import serviceAccount from "./../../config/serviceAccountKey.json";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as ServiceAccount),
});

const firestore = admin.firestore();
const auth = admin.auth();

export { firestore, auth };
