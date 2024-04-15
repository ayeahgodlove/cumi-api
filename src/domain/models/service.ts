import { IBaseResponse } from "./base-response";
export interface IService {
  id: string;
  title: string;
  description: string;
  userId: string;
  icon: string
}

export const emptyService: IService = {
  id: "",
  title: "",
  description: "",
  userId: "",
  icon: ""
};

export interface IServiceResponse extends IBaseResponse {
  data: IService | null | IService[];
}
