// src/presentation/dtos/comment-request.dto.ts

import {  IsNotEmpty, IsString, Length, Min } from "class-validator";
import { IComment, emptyComment } from "../../domain/models/comment";
import { nanoid } from "nanoid";

export class CommentRequestDto {

  @IsNotEmpty()
  @IsString()
  content: string;

  @IsNotEmpty()
  @IsString()
  postId: string;

  constructor(data: IComment) {
    this.content = data.content;
    this.postId = data.postId;
  }

  toData(): IComment {
    return {
      ...emptyComment,
      id: nanoid(10),
      content: this.content,
      postId: this.postId
    };
  }

  toUpdateData(data: IComment): IComment {
    return {
      id: data.id,
      content: data.content,
      userId: data.userId,
      postId: data.postId,
      publishedAt: data.publishedAt,
    }
  }
}
