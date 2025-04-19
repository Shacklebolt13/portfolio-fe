// "use client";
// import { BASE_URL } from "@/constants/appConstants";
// import { TABULATED_COLLECTIONS } from "@/constants/availableSubsections";
// import getRepository from "@/db/fileRepository";
// import { MetadataRoute } from "next";

// export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
//   var sitemap: MetadataRoute.Sitemap = [];

//   console.log(`Type of tabulated: ${typeof TABULATED_COLLECTIONS}`);
//   TABULATED_COLLECTIONS.forEach(async (coll) => {
//     var collData = await getRepository(coll).findAll();
//     console.log(`generating ${collData.docs.length} sitemap for ${coll}`);
//     collData.docs.forEach((document) => {
//       sitemap.push({
//         url: `${BASE_URL}/${coll}/${document.data().showcase.id}`,
//         lastModified: new Date(),
//         changeFrequency: "daily",
//       });
//     });
//   });

//   return sitemap;
// }
