import {
  AppOptions,
  cert,
  getApp,
  getApps,
  initializeApp,
  ServiceAccount,
} from "firebase-admin/app";
import { getStorage } from "firebase-admin/storage";

import { BASE_URL } from "@/services/api";

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
  if (!getApps().length) {
    const app = initializeApp(options);

    // initial cors config
    getStorage(app)
      .bucket()
      .setCorsConfiguration([
        {
          origin: [BASE_URL],
          method: ["PUT"],
          responseHeader: ["*"],
          maxAgeSeconds: 3600,
        },
      ])
      .then(() => console.log("Bucket CORS configuration updated!"));

    return app;
  }

  return getApp();
};

const admin = createAdminApp();
export const storage = getStorage(admin);
