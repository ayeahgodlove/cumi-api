import { IBaseResponse } from "./base-response";
export interface IEvent {
  id: string;
  title: string;
  description: string;
  eventDate: Date;
  imageUrl: string;
  location: string;
  userId: string;
}

export const emptyEvent: IEvent = {
  id: "",
  title: "",
  description: "",
  imageUrl: "",
  eventDate: new Date(),
  location: "",
  userId: ""
};

export interface IEventResponse extends IBaseResponse {
  data: IEvent | null | IEvent[];
}
