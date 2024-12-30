import {
  ABOUT_COLLECTION,
  CONTACT_COLLECTION,
  TABULATED_COLLECTIONS,
} from "@/constants/dbconstants";
import getRepository from "../db/getRepository";
import { TimelineItemModel } from "react-chrono/dist/models/TimelineItemModel";
import { Model } from "@/dtos/server";

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

export function getChronologicalData(data: Map<string, Model[]>): TimelineItemModel[] {
  return Array.from(data.values()).flat()
    .filter((val) => {
      return val.chronology !== undefined
    })
    .sort((a, b) => {
      if (a.started_on === undefined && b.started_on === undefined) return 0;
      if (a.started_on === undefined) return 1;
      if (b.started_on === undefined) return -1;
      return new Date(a.started_on).getTime() - new Date(b.started_on).getTime();
    }).map((val) => {
      return {
        date: val.started_on,
        title: val.showcase.title,
        cardTitle: val.showcase.title,
        cardSubtitle: `A column of Red Army prisoners taken during the first days of the German invasion`,
      }
    });
}