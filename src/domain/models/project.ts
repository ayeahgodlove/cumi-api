import { IBaseResponse } from "./base-response";
export interface IProject {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  deployUrl: string;
  userId: string;
}

export const emptyProject: IProject = {
  id: "",
  title: "",
  description: "",
  imageUrl: "",
  githubUrl: "",
  deployUrl: "",
  userId: ""
};

export interface IProjectResponse extends IBaseResponse {
  data: IProject | null | IProject[];
}
