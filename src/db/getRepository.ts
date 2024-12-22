import { firestore_app } from "@/config/firebase";
import {
  Firestore,
  CollectionReference,
  collection,
  getDocsFromCache,
  getDocs,
  DocumentSnapshot,
  DocumentData,
  getDocFromCache,
  doc,
  getDoc,
} from "firebase/firestore";
import { fsync, readFileSync, writeFileSync } from "fs";
import { readdir, readFile } from "fs/promises";

/**
 * Represents the different models in the database
 * A common model was used for all the collections to make it easier to work with
 * on a single page
 */
export interface Model {

  id: string;

  //any heading/project name/job title etc.
  title: string;

  //the organization name for the project/experience
  organization: string;

  //for experience in resume
  responsibles: string[];

  // the blog for the project/experience
  blog: string[];

  //for time period
  started_on?: Date;
  ended_on?: Date;
  ongoing?: boolean;

  //relateds
  related_projects: {
    title: string;
    key: string;
    icon: string;
  }[];

  related_skills: {
    title: string;
    key: string;
    icon: string;
  }[];

  related_technologies: {
    title: string;
    key: string;
    icon: string;
  }[];

  related_links: {
    title: string;
    link: string;
    icon: string;
  }[];

  showcase: {
    id: string;
    title: string;
    description: string;
    icon: string;
  };
}

export class FileModel {
  _data: Model;
  constructor(string_data: string) {
    this._data = JSON.parse(string_data);
  }

  data() {
    return this._data;
  }
}

export class FileModels {
  docs: FileModel[];
  constructor(folder_path: string, file_names: string[]) {
    this.docs = file_names.map((file_name) => {
      return new FileModel((readFileSync(`${folder_path}/${file_name}`)).toString());
    });
  }
}

/**
 * This is used to convert the data from firestore to the model
 * and vice versa
 */
const model_converter = {
  toFirestore: (data: Model) => {
    // this will not be used in this project
    throw new Error("not implemented");
    return data;
  },
  fromFirestore: (snap: DocumentData) => {
    const data = snap.data();
    return {
      ...data,
      started_on: data?.started_on?.toDate(),
      ended_on: data?.ended_on?.toDate(),
    };
  },
};

/**
 * This is the base repository class
 * It provides the basic functionality for all the repositories
 */
class BaseRepository {
  db: Firestore;
  readonly collection_name: string;
  readonly collection_ref: CollectionReference;

  constructor(db: Firestore, collection_name: string) {
    this.db = db;
    this.collection_name = collection_name;
    this.collection_ref = collection(db, collection_name).withConverter(
      model_converter
    );
  }

  /**
   * This function is used to fetch all the documents in the collection.
   *
   * @param use_cache whether to use the cache or fetch from the server
   * @returns  a list of all the document references in the collection
   */
  async findAll(use_cache: boolean = false) {
    return use_cache
      ? await getDocsFromCache(this.collection_ref)
      : await getDocs(this.collection_ref);
  }

  /**
   * This function is used to fetch a single document from the collection
   *
   * @param id the id of the document to fetch
   * @param use_cache whether to use the cache or fetch from the server
   * @returns the document reference with the given id
   */
  async findById(id: string, use_cache: boolean = false) {
    var result: DocumentSnapshot<Model, DocumentData> | null = null;
    if (use_cache) {
      try {
        result = await getDocFromCache(
          doc(this.collection_ref, id).withConverter(model_converter)
        );
      } catch (e) {
        console.debug(
          `cannot find document with id: ${id} in cache of collection: ${this.collection_name}`
        );
        result = null;
      }
    }
    result =
      result ||
      (await getDoc(
        doc(this.collection_ref, id).withConverter(model_converter)
      ));
    if (!result.exists()) {
      console.debug(
        `cannot find document with id: ${id} in collection: ${this.collection_name}`
      );
      return null;
    }

    //if the file by the document id does not exist, create one in db/filename.json

    // try {
    //   await readFile(`${process.cwd()}/db/${id}.json`)
    // } catch (e) {
    //   writeFileSync(`${process.cwd()}/db/${result._key}.json`, JSON.stringify(result.data()))
    // }
    return result;
  }
}

class FileRepository {
  folder_path: string;
  constructor(folder_path: string) {
    this.folder_path = folder_path.toLocaleLowerCase();
  }

  async findAll() {
    const file_names = await readdir(this.folder_path);
    return new FileModels(this.folder_path, file_names);
  }

  async findById(id: string): Promise<FileModel | null> {
    try {
      return new FileModel((await readFile(`${this.folder_path}/${id}.json`)).toString());
    } catch (e) {
      console.debug(
        `cannot find file with id: ${id} in folder: ${this.folder_path}`
      );
      return null;
    }
  }
}
/**
 * Provides a pool of repositories for each collection
 * This is done to avoid creating multiple instances of the same repository
 * and to avoid creating multiple instances of the same collection.
 *
 * Each collection will have a single instance of the repository
 */
const repository_cache: { [key: string]: FileRepository } = {};

// /**
//  * This function is used to get a repository for a given collection.
//  * This will utilize the repository cache to avoid creating multiple instances.
//  *
//  * @param collection_name the name of the collection
//  * @returns a repository for the given collection
//  */
// export default function getRepository(collection_name: string) {
//   if (!repository_cache[collection_name]) {
//     repository_cache[collection_name] = new BaseRepository(
//       firestore_app,
//       collection_name
//     );
//   }
//   return repository_cache[collection_name];
// }

/**
 * This function is used to get a repository for a given folder.
 * This will utilize the repository cache to avoid creating multiple instances.
 * 
 * @param collection_name the name of the collection
 * @returns a repository for the given collection
 */
export default function getRepository(folder_name: string) {
  if (!repository_cache[folder_name]) {
    console.log('current working directory:', process.cwd())
    console.log(`folder content: ${readdir(`${process.cwd()}`)}`)
    const folder_path = `${process.cwd()}/db/${folder_name}`;
    repository_cache[folder_name] = new FileRepository(folder_path);
  }
  return repository_cache[folder_name];
}