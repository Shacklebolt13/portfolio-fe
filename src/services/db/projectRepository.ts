import { firebase_app } from "@/config/firebase";
import { PROJECT_COLLECTION } from "@/constants/dbconstants";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const firestore = getFirestore(firebase_app);

export const getCollection = () => {
  return collection(firestore, PROJECT_COLLECTION);
};

export const findAll = async () => {
  const projectCollection = getCollection();
  return (await getDocs(projectCollection)).docs.map((doc) => doc.data());
};
