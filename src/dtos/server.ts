import { readFileSync } from "fs";
import { Media } from "react-chrono/dist/models/TimelineMediaModel";

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

    chronology: {
        title: string;
        subtitle: string;
        media?: Media;
    }
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

export class FilesModel {
    docs: FileModel[];
    constructor(folder_path: string, file_names: string[]) {
        this.docs = file_names.map((file_name) => {
            return new FileModel((readFileSync(`${folder_path}/${file_name}`)).toString());
        });
    }
}
