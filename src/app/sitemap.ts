import { BASE_URL } from "@/constants/appConstants";
import { TABULATED_COLLECTIONS } from "@/constants/dbconstants";
import getRepository from "@/db/getRepository";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  var sitemap: MetadataRoute.Sitemap = [];

  for (let coll of TABULATED_COLLECTIONS) {
    var collData = await getRepository(coll).findAll();
    console.log(`generating ${collData.docs.length} sitemap for ${coll}`);
    collData.forEach((document) => {
      sitemap.push({
        url: `${BASE_URL}/${coll}/${document.id}`,
        lastModified: new Date(),
        changeFrequency: "daily",
      });
    });
  }

  return sitemap;
}
