import {
  AppOptions,
  cert,
  getApp,
  getApps,
  initializeApp,
  ServiceAccount,
} from "firebase-admin/app";
import { getStorage } from "firebase-admin/storage";

const config: ServiceAccount = {
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  privateKey: process.env.FIREBASE_PRIVATE_KEY,
  projectId: process.env.FIREBASE_PROJECT_ID,
};

const options: AppOptions = {
  credential: cert(config),
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
};

const createAdminApp = () => {
  if (!getApps().length) return initializeApp(options);
  return getApp();
};

const admin = createAdminApp();
export const storage = getStorage(admin);
