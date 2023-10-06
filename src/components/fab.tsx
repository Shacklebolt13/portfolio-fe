import { ArrowUpIcon } from "@heroicons/react/24/solid";

export const Fab = () => {
  return (
    <div className="absolute right-0 bottom-0 mx-10 my-10">
      <button className="bg-black m-1 p-4 rounded-full border-teal-400 border-2 hover:border-teal-100 text-teal-400 hover:text-teal-100">
        <ArrowUpIcon className="h-5 w-5 " />
      </button>
    </div>
  );
};
