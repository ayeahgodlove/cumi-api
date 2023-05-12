import { IBaseResponse } from "./base-response";

export interface ITag {
  id: string;
  name: string;
  slug: string;
}

export const emptyTag: ITag = {
  id: "",
  name: "",
  slug: "",
};

export interface ITagResponse extends IBaseResponse {
  data: ITag | null | ITag[];
}
