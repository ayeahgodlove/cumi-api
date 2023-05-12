import { IBaseResponse } from "./base-response";

export interface IUser {
  id: string;
  authStrategy: string;
  username: string;
  email: string;
  avatar: string;
  phoneNumber: string;
  address: string;
  password: string;
  dateRegistered: Date;
}

export const emptyUser: IUser = {
  id: "",
  username: "",
  email: "",
  phoneNumber: "",
  address: "",
  password: "",
  avatar: "",
  authStrategy: "",
  dateRegistered: new Date(),
};

export interface IUserResponse extends IBaseResponse {
  data: IUser | null | IUser[];
}
