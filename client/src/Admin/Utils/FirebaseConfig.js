import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyA66S0vBB1FpPf494YSEygyPV2R4wPDHBA",
  authDomain: "watches-api-storage.firebaseapp.com",
  projectId: "watches-api-storage",
  storageBucket: "watches-api-storage.appspot.com",
  messagingSenderId: "161432967951",
  appId: "1:161432967951:web:a541e814c801ceab5b7c7a"
};


const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)