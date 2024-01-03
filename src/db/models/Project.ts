import BaseModel from "./BaseModel";

export default interface Project extends BaseModel {
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  technologies: string[];
  experiences: string[];
}
