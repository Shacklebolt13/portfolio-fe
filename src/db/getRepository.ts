import { firestore_app } from "@/config/firebase";
import { BaseRepository } from "./baseRepository";

const repository_cache: { [key: string]: BaseRepository } = {};

export default function getRepository(collection_name: string) {
  if (!repository_cache[collection_name]) {
    repository_cache[collection_name] = new BaseRepository(
      firestore_app,
      collection_name
    );
  }
  return repository_cache[collection_name];
}
