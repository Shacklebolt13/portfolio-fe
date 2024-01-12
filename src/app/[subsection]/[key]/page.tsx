import BlogSection from "@/components/blogSection";
import generateMdxArray from "@/services/mdxGenerator";
import RelatedSection from "@/components/relatedSection";
import TitleSection from "@/components/titleSection";

import getRepository from "@/db/getRepository";
import { notFound } from "next/navigation";
import { AVAILABLE_SUBSECTIONS } from "@/constants/availableSubsections";

const available_sections = Object.entries(AVAILABLE_SUBSECTIONS).map(
  ([key, value]) => key
);

export async function generateStaticParams() {
  return available_sections.map(async (subsection) => {
    const repository = getRepository(subsection);
    const documentDataList = await repository?.findAll();
    return documentDataList?.docs.map((document) => {
      const data = document.data();
      return { params: { subsection: subsection, key: data.id } };
    });
  });
}

export default async function Page({ params, searchParams }) {
  if (!available_sections.includes(params.subsection)) {
    notFound();
  }
  const subsection = params.subsection;
  const repository = getRepository(subsection);
  const key = params.key;

  const document = await repository.findById(key);
  if (!document) {
    notFound();
  }

  const data = document.data();
  const blog = await generateMdxArray(data);

  return (
    <div className="flex flex-col grow m-4">
      <TitleSection data={data} />
      <hr className="my-4" />
      <BlogSection blog={blog} className="grow" />
      <RelatedSection data={data} />
    </div>
  );
}
