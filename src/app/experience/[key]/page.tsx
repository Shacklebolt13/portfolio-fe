import { RESUME } from "@/services/resumeParser";

const getExperience = (key) => {
  console.info("fetching experience: ", key);
  return RESUME.experiences[key];
};

export default function Page({ params }) {
  const experience = getExperience(params.key);
  return <div>ID: {`${experience?.name}`}</div>;
}

export function getStaticPaths() {
  const paths = Object.keys(RESUME.experiences).map((key) => ({
    params: { key },
  }));
  return { paths, fallback: false };
}
