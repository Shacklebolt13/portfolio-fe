import {
  Firestore,
  collection,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";

export class BaseRepository<X_TYPE> {
  db: Firestore;
  collection_name: string;
  collection_ref: any;

  constructor(db: Firestore, collection_name: string) {
    this.db = db;
    this.collection_name = collection_name;
    this.collection_ref = collection(this.db, this.collection_name);
  }

  async findAll() {
    return (await getDocs(this.collection_ref)).docs.map(
      (doc) => doc.data() as X_TYPE
    );
  }

  async findById(id: string) {
    const result = await getDoc(doc(this.db, this.collection_ref, id));
    if (!result.exists()) {
      console.debug(
        "cannot find document with id: " +
          id +
          " in collection: " +
          this.collection_name
      );
      return null;
    }
    return result.data() as X_TYPE;
  }
}
