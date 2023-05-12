import { Table, Model, Column, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import { IComment } from "../../domain/models/comment";
import { User } from "./user";
import { Post } from "./post";
@Table({
  timestamps: true,
  paranoid: true,
  tableName: "comment",
  modelName: "Comment",
}) 
export class Comment extends Model<IComment> {
  @Column({
    type: DataType.STRING(20),
    allowNull: false,
    primaryKey: true,
  })
  declare id?: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  content!: string;

  @ForeignKey(() => User) // foreign key
  @Column({
    type: DataType.STRING(128),
    allowNull: false,
  })
  authorId!: string;
  
  @ForeignKey(() => Post) // foreign key
  @Column({
    type: DataType.STRING(128),
    allowNull: false,
  })
  postId!: string;

  @Column({
    type: DataType.DATE,
  })
  publishedAt!: Date;

  @BelongsTo(() => Post, "postId")
  post!: Post;

  @BelongsTo(() => User, "authorId")
  user!: User;
}
