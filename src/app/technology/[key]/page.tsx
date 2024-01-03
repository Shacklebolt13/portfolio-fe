import { RESUME } from "@/services/resumeParser";

export const dynamicParams = false;

const getTechnology = (key) => {
  console.info("fetching technology: ", key);
  return RESUME.technologies[key];
};

export default function Page({ params, searchParams }) {
  const technology = getTechnology(params.key);
  return <div>ID: {`${technology?.name}`}</div>;
}

export async function generateStaticParams() {
  const paths = Object.keys(RESUME.technologies).map((key) => ({
    params: { key },
  }));
  return paths;
}
