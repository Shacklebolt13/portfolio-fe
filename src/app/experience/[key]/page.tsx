import { ExperienceRepository } from "@/db/repositories/experienceRepository";
import { RESUME } from "@/services/resumeParser";

const getExperience = (key) => {
  console.info("fetching experience: ", key);
  return RESUME.experiences[key];
};

export default function Page({ params, searchParams }) {
  const experience = getExperience(params.key);
  return <div>ID: {`${experience?.name}`}</div>;
}

export async function generateStaticParams() {
  return (await ExperienceRepository.findAll()).map((experience) => ({
    params: { key: experience.id },
  }));
}
