import { readFileSync } from "fs";
import yaml from "js-yaml";
import { findAll } from "./db/experienceRepository";

const parseResume = (): any => {
  console.log("Parsing resume.yaml");
  trial();
  try {
    const portfolioFileContents = readFileSync(
      "src/assets/resume.yaml",
      "utf8"
    );
    return yaml.load(portfolioFileContents);
  } catch (error) {
    console.error(error);
    return {};
  }
};

const trial = () => {
  try {
    findAll();
  } catch (error) {
    console.error(error);
    return {};
  }
};

export const RESUME = parseResume();
