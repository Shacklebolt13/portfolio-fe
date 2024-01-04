import {
  ACHIEVEMENT_COLLECTION,
  CONTACT_COLLECTION,
  EDUCATION_COLLECTION,
  EXPERIENCE_COLLECTION,
  PROJECT_COLLECTION,
  SKILL_COLLECTION,
  SOCIAL_COLLECTION,
  TECHNOLOGY_COLLECTION,
} from "@/constants/dbconstants";
import getRepository from "@/db/getRepository";
import { notFound } from "next/navigation";

const available_subsections = [
  EXPERIENCE_COLLECTION,
  PROJECT_COLLECTION,
  EDUCATION_COLLECTION,
  SKILL_COLLECTION,
  TECHNOLOGY_COLLECTION,
  ACHIEVEMENT_COLLECTION,
  CONTACT_COLLECTION,
  SOCIAL_COLLECTION,
];

export async function generateStaticParams() {
  return available_subsections.map(async (subsection) => {
    const repository = getRepository(subsection);
    const documentDataList = await repository?.findAll();
    return documentDataList?.docs.map((document) => {
      const data = document.data();
      return { params: { subsection: subsection, key: data.id } };
    });
  });
}

export default async function Page({ params, searchParams }) {
  if (!available_subsections.includes(params.subsection)) {
    notFound();
  }
  const subsection = params.subsection;
  const repository = getRepository(subsection);
  const key = params.key;

  const document = await repository.findById(key);
  if (!document) {
    notFound();
  }

  return <>{`ID: ${JSON.stringify(document.data())}`}</>;
}
