import { firebase_app } from "@/config/firebase";
import { TECHNOLOGY_COLLECTION } from "@/constants/dbconstants";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const firestore = getFirestore(firebase_app);

export const getCollection = () => {
  return collection(firestore, TECHNOLOGY_COLLECTION);
};

export const findAll = async () => {
  const technologyCollection = getCollection();
  return (await getDocs(technologyCollection)).docs.map((doc) => doc.data());
};
