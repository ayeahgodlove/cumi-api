import { Request, Response } from "express";
import {
  IComment,
  ICommentResponse,
  emptyComment,
} from "../../domain/models/comment";
import { CommentUseCase } from "../../domain/usecases/comment.usecase";
import { CommentRepository } from "../../data/repositories/impl/comment.repository";
import { CommentMapper } from "../mappers/mapper";
import { CommentRequestDto } from "../dtos/comment-request.dto";
import { validate } from "class-validator";
import { displayValidationErrors } from "../../utils/displayValidationErrors";
import { NotFoundException } from "../../shared/exceptions/not-found.exception";

const commentRepository = new CommentRepository();
const commentUseCase = new CommentUseCase(commentRepository);
const commentMapper = new CommentMapper();

export class CommentsController {
  async createComment(
    req: Request,
    res: Response<ICommentResponse>
  ): Promise<void> {
    const dto = new CommentRequestDto(req.body);
    const validationErrors = await validate(dto);

    if (validationErrors.length > 0) {
      res.status(400).json({
        validationErrors: displayValidationErrors(validationErrors) as any,
        success: false,
        data: null,
        message: "Attention!",
      });
    } else {
      try {
        const commentResponse = await commentUseCase.createComment(
          dto.toData()
        );

        res.status(201).json({
          data: commentResponse.toJSON<IComment>(),
          message: "Comment created Successfully!",
          validationErrors: [],
          success: true,
        });
      } catch (error: any) {
        res.status(400).json({
          data: null,
          message: error.message,
          validationErrors: [],
          success: false,
        });
      }
    }
  }

  async getAll(req: Request, res: Response<any>): Promise<void> {
    try {
      const comments = await commentUseCase.getAll();
      const commentsDTO = commentMapper.toDTOs(comments);

      res.json({
        data: commentsDTO,
        message: "Success",
        validationErrors: [],
        success: true,
      });
    } catch (error: any) {
      res.status(400).json({
        data: null,
        message: error.message,
        validationErrors: [error],
        success: false,
      });
    }
  }

  async getCommentById(
    req: Request,
    res: Response<ICommentResponse>
  ): Promise<void> {
    try {
      const id = req.params.id;

      const comment = await commentUseCase.getCommentById(id);
      if (!comment) {
        throw new NotFoundException("Comment", id);
      }
      const commentDTO = commentMapper.toDTO(comment);
      res.json({
        data: commentDTO,
        message: "Success",
        validationErrors: [],
        success: true,
      });
    } catch (error: any) {
      res.status(400).json({
        data: null,
        message: error.message,
        validationErrors: [error],
        success: false,
      });
    }
  }

  async updateComment(
    req: Request,
    res: Response<ICommentResponse>
  ): Promise<void> {
    const dto = new CommentRequestDto(req.body);
    const validationErrors = await validate(dto);

    if (validationErrors.length > 0) {
      res.status(400).json({
        validationErrors: displayValidationErrors(validationErrors) as any,
        success: false,
        data: null,
        message: "Attention!",
      });
    } else {
      try {
        const id = req.params.id;

        const obj: IComment = {
          ...emptyComment,
          ...req.body,
          id: id,
        };
        const updatedComment = await commentUseCase.updateComment(obj);
        const commentDto = commentMapper.toDTO(updatedComment);

        res.json({
          data: commentDto,
          message: "Comment Updated Successfully!",
          validationErrors: [],
          success: true,
        });
      } catch (error: any) {
        res.status(400).json({
          data: null,
          message: error.message,
          validationErrors: [error],
          success: false,
        });
      }
    }
  }

  async deleteComment(
    req: Request,
    res: Response<ICommentResponse>
  ): Promise<void> {
    try {
      const id = req.params.id;

      await commentUseCase.deleteComment(id);

      res.status(204).json({
        message: `Operation successfully completed!`,
        validationErrors: [],
        success: true,
        data: null,
      });
    } catch (error: any) {
      res.status(400).json({
        message: error.message,
        data: null,
        validationErrors: [error],
        success: true,
      });
    }
  }
}