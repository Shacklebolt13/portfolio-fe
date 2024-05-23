import ShowCaseTabs from "@/components/showcaseTabs";
import { TABULATED_COLLECTIONS } from "@/constants/dbconstants";
import getRepository, { Model } from "@/db/getRepository";

async function getDocumentListForCards(collection_name: string) {
  return (await getRepository(collection_name).findAll()).docs;
}

function getAllDisplayData() {
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

export default async function Page() {
  return (
    <div className="flex flex-grow">
      <div className="p-4 flex-col flex-grow">
        <ShowCaseTabs data={getAllDisplayData()} />
      </div>
    </div>
  );
}
