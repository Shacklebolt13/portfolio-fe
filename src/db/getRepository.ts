import { FileModel, FilesModel } from "@/dtos/raw-data";
import { readdir, readFile } from "fs/promises";

class FileRepository {
  folder_path: string;
  constructor(folder_path: string) {
    this.folder_path = folder_path.toLocaleLowerCase();
  }

  async findAll() {
    try {
      const file_names = await readdir(this.folder_path);
      return new FilesModel(this.folder_path, file_names);
    } catch (e) {
      console.debug(
        `cannot find files in folder: ${this.folder_path}`
      );
      return new FilesModel(this.folder_path, []);
    }
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

/**
 * This function is used to get a repository for a given folder.
 * This will utilize the repository cache to avoid creating multiple instances.
 * 
 * @param collection_name the name of the collection
 * @returns a repository for the given collection
 */
export default function getRepository(folder_name: string) {
  if (!repository_cache[folder_name]) {
    const folder_path = `${process.cwd()}/db/${folder_name}`;
    repository_cache[folder_name] = new FileRepository(folder_path);
  }
  return repository_cache[folder_name];
}