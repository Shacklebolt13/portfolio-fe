import BaseModel from "./BaseModel";

export default interface Technology extends BaseModel {
  id: string;
  name: string;
  description: string;
  projects: string[];
  experiences: string[];
  technologies: string[];
}
