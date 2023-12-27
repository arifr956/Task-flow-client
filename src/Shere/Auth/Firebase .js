import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUT_HDOMAIN,
  projectId: import.meta.env.VITE_PRO_JECTID,
  storageBucket: import.meta.env.VITE_STO_RAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MES_SAGINGSENDERID,
  appId: import.meta.env.VITE_APP_ID
};
const app = initializeApp(firebaseConfig);
export default app