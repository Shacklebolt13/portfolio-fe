import { firebase_app } from "@/config/firebase";
import { PROJECT_COLLECTION } from "@/constants/dbconstants";
import { getFirestore } from "firebase/firestore";
import { BaseRepository } from "./baseRepository";
import Project from "../models/Project";

export const ProjectRepository = new BaseRepository<Project>(
  getFirestore(firebase_app),
  PROJECT_COLLECTION
);
