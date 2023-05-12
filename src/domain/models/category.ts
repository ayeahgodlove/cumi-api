import { IBaseResponse } from "./base-response";
export interface ICategory {
  id: string;
  name: string;
  slug: string;
}

export const emptyCategory: ICategory = {
  id: "",
  name: "",
  slug: "",
};

export interface ICategoryResponse extends IBaseResponse {
  data: ICategory | null | ICategory[];
}
