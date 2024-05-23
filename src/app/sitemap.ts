import { TABULATED_COLLECTIONS } from "@/constants/dbconstants";
import getRepository from "@/db/getRepository";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  var sitemap: MetadataRoute.Sitemap = [];

  for (let coll of TABULATED_COLLECTIONS) {
    var collData = await getRepository(coll).findAll();
    collData.forEach((document) => {
      sitemap.push({
        url: `/experience/${document.id}`,
        lastModified: new Date(),
        changeFrequency: "daily",
      });
    });
  }

  return sitemap;
}
