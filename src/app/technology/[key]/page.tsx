import { RESUME } from "@/services/resumeParser";

const getTechnology = (key) => {
  console.info("fetching technology: ", key);
  return RESUME.technologies[key];
};

export default function Page({ params }) {
  const technology = getTechnology(params.key);
  return <div>ID: {`${technology?.name}`}</div>;
}

export function getStaticPaths() {
  const paths = Object.keys(RESUME.technologies).map((key) => ({
    params: { key },
  }));
  return { paths, fallback: false };
}
