import ShowCaseTabs from "@/components/showcaseTabs";
import {
  CERTIFICATION_COLLECTION,
  COURSE_COLLECTION,
  EDUCATION_COLLECTION,
  EXPERIENCE_COLLECTION,
  PROJECT_COLLECTION,
  SKILL_COLLECTION,
} from "@/constants/dbconstants";
import getRepository, { Model } from "@/db/getRepository";

async function getDocumentListForCards(collection_name: string) {
  return (await getRepository(collection_name).findAll()).docs;
}

function getAllDisplayData() {
  const collections = [
    EXPERIENCE_COLLECTION,
    PROJECT_COLLECTION,
    EDUCATION_COLLECTION,
    SKILL_COLLECTION,
    COURSE_COLLECTION,
    CERTIFICATION_COLLECTION,
  ];
  const collectionDataMap = new Map<string, Model[]>();
  collections.forEach(async (collection) => {
    var data: Model[] = [];
    (await getDocumentListForCards(collection)).forEach((document) => {
      data.push(document.data() as Model);
    });
    collectionDataMap.set(collection, data);
  });
  return collectionDataMap;
}

export default async function Page() {
  return (
    <div className="flex flex-grow">
      <div className="p-4 flex-col flex-grow">
        <ShowCaseTabs data={getAllDisplayData()} />
      </div>
    </div>
  );
}
