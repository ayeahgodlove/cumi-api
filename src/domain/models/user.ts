import { Role } from "../../data/entities/role";
import { IBaseResponse } from "./base-response";
import { IRole } from "./role";

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
  lat: number;
  long: number;
  roles?: Role[] | IRole[]
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
  lat: 0,
  long: 0
};

export interface IUserResponse extends IBaseResponse {
  data: IUser | null | IUser[];
}
