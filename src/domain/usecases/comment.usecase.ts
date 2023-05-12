import { Comment } from "../../data/entities/comment";
import { IRepository} from "../../data/repositories/contracts/repository.base";
import { IComment } from "../models/comment";
export class CommentUseCase {
  /**
   *
   */
  constructor(private readonly commentRepository: IRepository<IComment, Comment>) {}

  async createComment(comment: IComment): Promise<Comment> {
    //because it's already done in the Repository
    return this.commentRepository.create(comment);
  }

  async getAll(): Promise<Comment[]> {
    return this.commentRepository.getAll();
  }

  async getCommentById(id: string): Promise<Comment | null> {
    return this.commentRepository.findById(id);
  }

  async updateComment(comment: IComment): Promise<Comment> {
    const obj: IComment = {
      ...comment,
    };
    return this.commentRepository.update(obj);
  }

  async deleteComment(id: string): Promise<void> {
    return this.commentRepository.delete(id);
  }
}
