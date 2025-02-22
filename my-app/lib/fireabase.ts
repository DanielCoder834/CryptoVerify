import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDJE1SykzerLBgMrs9NCj47qevXIDRgi7w",
    authDomain: "crypto-ltv.firebaseapp.com",
    projectId: "crypto-ltv",
    storageBucket: "crypto-ltv.firebasestorage.app",
    messagingSenderId: "169616109453",
    appId: "1:169616109453:web:2fceff3f33af6b451817c4"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error(error);
  }
};

export const logout = async () => {
  await signOut(auth);
};
