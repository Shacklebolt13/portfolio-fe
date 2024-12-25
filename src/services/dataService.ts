import {
  ABOUT_COLLECTION,
  CONTACT_COLLECTION,
  TABULATED_COLLECTIONS,
} from "@/constants/dbconstants";
import getRepository, { Model } from "../db/getRepository";

export default async function getContact() {
  return (
    await getRepository(ABOUT_COLLECTION).findById(CONTACT_COLLECTION)
  )?.data();
}

export async function getDocumentListForCards(collection_name: string) {
  return (await getRepository(collection_name).findAll()).docs;
}

export function getAllDisplayData() {
  const collectionDataMap = new Map<string, Model[]>();
  TABULATED_COLLECTIONS.forEach(async (collection) => {
    var data: Model[] = [];
    (await getDocumentListForCards(collection)).forEach((document) => {
      data.push(document.data() as Model);
    });
    collectionDataMap.set(collection, data);
  });
  return collectionDataMap;
}
