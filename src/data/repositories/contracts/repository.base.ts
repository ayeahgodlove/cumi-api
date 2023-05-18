import { ICategory } from "../../../domain/models/category";
import { IPost } from "../../../domain/models/post";
import { IRole } from "../../../domain/models/role";
import { IUser } from "../../../domain/models/user";
import { Category } from "../../entities/category";
import { Post } from "../../entities/post";
import { Role } from "../../entities/role";
import { User } from "../../entities/user";
import { IDocument } from "../../../domain/models/document";
import { DocumentFile } from "../../entities/document";
import { Tag } from "../../entities/tag";
import { ITag } from "../../../domain/models/tag";

export interface IRepository<T, U> {
  create(category: T): Promise<U>;
  findById(id: string): Promise<U | null>;
  getAll(): Promise<U[]>;
  update(category: T): Promise<U>;
  delete(id: string): Promise<void>;
}
export interface IPostRepository extends IRepository<IPost, Post> {
  findByTitle(title: string): Promise<Post | null>;
}
export interface IDocumentRepository extends IRepository<IDocument, DocumentFile> {
  findByTitle(title: string): Promise<DocumentFile | null>;
}

export interface IPostRepository extends IRepository<IPost, Post> {
  findByTitle(title: string): Promise<Post | null>;
}

export interface ICategoryRepository extends IRepository<ICategory, Category> {
  findByName(name: string): Promise<Category | null>;
}

export interface IUserRepository extends IRepository<IUser, User> {
  findByName(name: string): Promise<User | null>;
}
export interface IRoleRepository extends IRepository<IRole, Role> {
  findByName(name: string): Promise<Role | null>;
}
export interface ITagRepository extends IRepository<ITag, Tag> {
  findByName(name: string): Promise<Tag | null>;
}