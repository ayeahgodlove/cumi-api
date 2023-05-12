import { Comment } from "../../entities/comment";
import { IComment } from "../../../domain/models/comment";
import { NotFoundException } from "../../../shared/exceptions/not-found.exception";
import { IRepository } from "../contracts/repository.base";

export class CommentRepository implements IRepository<IComment, Comment> {
  /**
   *
   */
  constructor() {}

  /**
   * Receives a Comment as parameter
   * @comment
   * returns void
   */
  async create(comment: IComment): Promise<Comment> {
    try {
      return await Comment.create<Comment>({ ...comment });
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a String as parameter
   * @id
   * returns Comment
   */
  async findById(id: string): Promise<Comment | null> {
    try {
      const commentItem = await Comment.findByPk(id);

      if (!commentItem) {
        throw new NotFoundException("Comment", id);
      }
      return commentItem;
    } catch (error) {
      throw error;
    }
  }

  /*
   * Returns an array of Comment
   */
  async getAll(): Promise<Comment[]> {
    try {
      const categories = await Comment.findAll();
      return categories;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a Comment as parameter
   * @comment
   * returns void
   */
  async update(comment: IComment): Promise<Comment> {
    const { id } = comment;
    try {
      const commentItem: any = await Comment.findByPk(id);

      console.log(comment);
      if (!commentItem) {
        throw new NotFoundException("Comment", id.toString());
      }

      return await commentItem?.update({ ...comment });
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a string as parameter
   * @id
   * returns void
   */
  async delete(id: string): Promise<void> {
    try {
      const commentItem = await Comment.findByPk(id);

      if (!commentItem) {
        throw new NotFoundException("Comment", id);
      }

      await commentItem?.destroy({
        force: true,
      });
    } catch (error) {
      throw error;
    }
  }
}
