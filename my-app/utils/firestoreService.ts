import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

// Function to fetch loans from Firestore
export const fetchLoans = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "loans"));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching loans:", error);
    return [];
  }
};

// Function to add a new loan to Firestore
export const addLoan = async (loan: { amount: number; status: string; dueDate: string }) => {
  try {
    const docRef = await addDoc(collection(db, "loans"), loan);
    return docRef.id;
  } catch (error) {
    console.error("Error adding loan:", error);
  }
};
