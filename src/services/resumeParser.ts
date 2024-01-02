import { readFileSync } from "fs";
import yaml from "js-yaml";

const parseResume = (): any => {
  console.log("Parsing resume.yaml");
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

export const RESUME = parseResume();
