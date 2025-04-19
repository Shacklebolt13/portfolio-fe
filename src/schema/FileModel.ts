import { readFileSync } from "fs";
import { Model } from "./Model";

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