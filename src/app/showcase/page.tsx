import ShowCaseTabs from "@/components/showcaseTabs";
import {
  getAllDisplayData,
  getDocumentListForCards,
} from "@/services/dataService";
export default async function Page() {
  return (
    <div className="flex flex-grow">
      <div className="p-4 flex-col flex-grow max-w-full">
        <ShowCaseTabs data={getAllDisplayData()} />
      </div>
    </div>
  );
}
