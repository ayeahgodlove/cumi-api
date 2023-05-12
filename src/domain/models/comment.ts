import { IBaseResponse } from "./base-response";

export interface IComment {
  id: string;
  content: string;
  userId: string; //foreign key to user table
  postId: string; //foreign key to post table
  publishedAt: Date;
}

export const emptyComment: IComment = {
  id: "",
  content: "",
  userId: "",
  postId: "",
  publishedAt: new Date(),
};

export interface ICommentResponse extends IBaseResponse {
  data: IComment | null | IComment[];
}
