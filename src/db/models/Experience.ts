import BaseModel from "./BaseModel";

export default interface Experience extends BaseModel {
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  technologies: string[];
  projects: string[];
  experiences: string[];
}
