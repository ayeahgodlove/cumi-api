import { IBaseResponse } from "./base-response";

export interface IReference {
  id: string;
  title: string;
  url: string;
  articleId: string; //foreign id to article
  slug: string;
}

export const emptyReference: IReference = {
  id: "",
  title: "",
  url: "",
  articleId: "",
  slug: "",
};

export interface IReferenceResponse extends IBaseResponse {
  data: IReference | null | IReference[];
}
