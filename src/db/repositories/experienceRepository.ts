import { firebase_app } from "@/config/firebase";
import { EXPERIENCE_COLLECTION } from "@/constants/dbconstants";
import { getFirestore } from "firebase/firestore";
import { BaseRepository } from "./baseRepository";
import Experience from "../models/Experience";

export const ExperienceRepository = new BaseRepository<Experience>(
  getFirestore(firebase_app),
  EXPERIENCE_COLLECTION
);
