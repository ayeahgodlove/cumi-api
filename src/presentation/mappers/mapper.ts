// src/presentation/mappers/category-mapper.ts

import { Category } from "../../data/entities/category";
import { Post } from "../../data/entities/post";
import { Role } from "../../data/entities/role";
import { Tag } from "../../data/entities/tag";
import { User } from "../../data/entities/user";
import { Comment } from "../../data/entities/comment";
import { DocumentFile } from "../../data/entities/document";
import { ICategory } from "../../domain/models/category";
import { IComment } from "../../domain/models/comment";
import { IPost } from "../../domain/models/post";
import { IRole } from "../../domain/models/role";
import { ITag } from "../../domain/models/tag";
import { IUser } from "../../domain/models/user";
import { IDocument } from "../../domain/models/document";

export class CategoryMapper {
  toDTO(category: Category): ICategory {
    const entity = category.toJSON<ICategory>();
    return entity;
  }
  toDTOs(categories: Category[]): ICategory[] {
    const _categories = categories.map((category) => {
      const entity = category.toJSON<ICategory>();
      return entity;
    });
    return _categories;
  }
}

export class PostMapper {
  toDTO(post: Post): IPost {
    const entity = post.toJSON<IPost>();
    return entity;
  }
  toDTOs(posts: Post[]): IPost[] {
    const _posts = posts.map((post) => {
      const entity = post.toJSON<IPost>();
      return entity;
    });
    return _posts;
  }
}

export class TagMapper {
  toDTO(tag: Tag): ITag {
    const entity = tag.toJSON<ITag>();
    return entity;
  }
  toDTOs(tags: Tag[]): ITag[] {
    const _tags = tags.map((tag) => {
      const entity = tag.toJSON<ITag>();
      return entity;
    });
    return _tags;
  }
}

export class CommentMapper {
  toDTO(comment: Comment): IComment {
    const entity = comment.toJSON<IComment>();
    return entity;
  }
  toDTOs(comments: Comment[]): IComment[] {
    const _comments = comments.map((comment) => {
      const entity = comment.toJSON<IComment>();
      return entity;
    });
    return _comments;
  }
}

export class DocumentMapper {
  toDTO(document: DocumentFile): IDocument {
    const entity = document.toJSON<IDocument>();
    return entity;
  }
  toDTOs(documents: DocumentFile[]): IDocument[] {
    const _documents = documents.map((document) => {
      const entity = document.toJSON<IDocument>();
      return entity;
    });
    return _documents;
  }
}

export class UserMapper {
  toDTO(user: User): IUser {
    const entity = user.toJSON<IUser>();
    return entity;
  }
  toDTOs(users: User[]): IUser[] {
    const _users = users.map((user) => {
      const entity = user.toJSON<IUser>();
      return entity;
    });
    return _users;
  }
}

export class RoleMapper {
  toDTO(role: Role): IRole {
    const entity = role.toJSON<IRole>();
    return entity;
  }
  toDTOs(roles: Role[]): IRole[] {
    const _roles = roles.map((role) => {
      const entity = role.toJSON<IRole>();
      return entity;
    });
    return _roles;
  }
}