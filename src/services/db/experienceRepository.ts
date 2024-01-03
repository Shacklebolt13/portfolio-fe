import { firebase_app } from "@/config/firebase";
import { EXPERIENCE_COLLECTION } from "@/constants/dbconstants";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const firestore = getFirestore(firebase_app);

export const getCollection = () => {
  return collection(firestore, EXPERIENCE_COLLECTION);
};

export const findAll = async () => {
  const experienceCollection = getCollection();
  return (await getDocs(experienceCollection)).docs.map((doc) => doc.data());
};
