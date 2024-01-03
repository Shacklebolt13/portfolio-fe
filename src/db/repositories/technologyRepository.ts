import { firebase_app } from "@/config/firebase";
import { TECHNOLOGY_COLLECTION } from "@/constants/dbconstants";
import { getFirestore } from "firebase/firestore";
import { BaseRepository } from "./baseRepository";
import Technology from "../models/Technology";

export const TechnologyRepository = new BaseRepository<Technology>(
  getFirestore(firebase_app),
  TECHNOLOGY_COLLECTION
);
