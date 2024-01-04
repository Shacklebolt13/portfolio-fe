import {
  CollectionReference,
  DocumentData,
  DocumentSnapshot,
  Firestore,
  collection,
  doc,
  getDoc,
  getDocFromCache,
  getDocs,
  getDocsFromCache,
} from "firebase/firestore";

export class BaseRepository {
  db: Firestore;
  readonly collection_name: string;
  readonly collection_ref: CollectionReference;

  constructor(db: Firestore, collection_name: string) {
    this.db = db;
    this.collection_name = collection_name;
    this.collection_ref = collection(db, collection_name);
  }

  async findAll(use_cache: boolean = false) {
    return use_cache
      ? await getDocsFromCache(this.collection_ref)
      : await getDocs(this.collection_ref);
  }

  async findById(id: string, use_cache: boolean = false) {
    var result: DocumentSnapshot<DocumentData, DocumentData> | null = null;
    if (use_cache) {
      try {
        result = await getDocFromCache(doc(this.collection_ref, id));
      } catch (e) {
        console.debug(
          `cannot find document with id: ${id} in cache of collection: ${this.collection_name}`
        );
        result = null;
      }
    }
    result = result || (await getDoc(doc(this.collection_ref, id)));
    if (!result.exists()) {
      console.debug(
        `cannot find document with id: ${id} in collection: ${this.collection_name}`
      );
      return null;
    }
    return result;
  }
}
