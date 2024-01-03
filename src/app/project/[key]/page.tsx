import { RESUME } from "@/services/resumeParser";

export const dynamicParams = false;

const getProject = (key) => {
  console.info("fetching project: ", key);
  return RESUME.projects[key];
};

export default function Page({ params, searchParams }) {
  const project = getProject(params.key);
  return <div>ID: {`${project.name}`}</div>;
}

export async function generateStaticParams() {
  const paths = Object.keys(RESUME.projects).map((key) => ({
    params: { key },
  }));
  return paths;
}
