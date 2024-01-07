import BlogSection from "@/components/blogSection";
import createBlogSection from "@/services/mdxGenerator";
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
  const blog = await createBlogSection(data);

  return (
    <div className="flex flex-col justify-evenly content-evenly">
      <TitleSection data={data} />

      <BlogSection data={data} blog={blog} />

      {(data.related_projects ?? []).length > 0 ? (
        <RelatedSection
          data={data}
          subsection={AVAILABLE_SUBSECTIONS.PROJECT}
        />
      ) : (
        <></>
      )}

      {(data.related_skills ?? []).length > 0 ? (
        <RelatedSection data={data} subsection={AVAILABLE_SUBSECTIONS.SKILL} />
      ) : (
        <></>
      )}

      {(data.related_technologies ?? []).length > 0 ? (
        <RelatedSection
          data={data}
          subsection={AVAILABLE_SUBSECTIONS.TECHNOLOGY}
        />
      ) : (
        <></>
      )}
    </div>
  );
}
