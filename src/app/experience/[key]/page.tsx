import { RESUME } from "@/services/resumeParser";
import { GetStaticProps, GetStaticPaths } from "next";

export const dynamicParams = false;

const getExperience = (key) => {
  console.info("fetching experience: ", key);
  return RESUME.experiences[key];
};

export default function Page({ params, searchParams }) {
  const experience = getExperience(params.key);
  return <div>ID: {`${experience?.name}`}</div>;
}

export async function generateStaticParams() {
  const paths = Object.keys(RESUME.experiences).map((key) => ({
    params: { key },
  }));
  return paths;
}
