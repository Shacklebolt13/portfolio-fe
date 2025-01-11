import {
  ABOUT_COLLECTION,
  CONTACT_COLLECTION,
  TABULATED_COLLECTIONS,
} from "@/constants/dbconstants";
import getRepository from "../db/getRepository";
import { TimelineItemModel } from "react-chrono/dist/models/TimelineItemModel";
import { ChronologyItemContainer, Model } from "@/dtos/raw-data";
import { showDate } from "@/utils/converters";

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

export function getChronologicalData(allData: Map<string, Model[]>): ChronologyItemContainer[] {
  var chronologyItemContainers: ChronologyItemContainer[] = new Array();
  allData.forEach((instances, key) => {
    const base_url = `/${key}`;
    instances.forEach((instance) => {
      if (instance.chronology) {
        instance.chronology.item.url = `${base_url}/${instance.showcase.id}`;
        instance.chronology.item.title = instance.started_on?.toString()
        instance.chronology.icon = instance.showcase.icon;
        chronologyItemContainers.push(instance.chronology);
      }
    });
  });
  return chronologyItemContainers;
}