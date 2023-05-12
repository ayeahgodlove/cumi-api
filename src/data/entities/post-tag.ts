import { Table, Model, Column, DataType, ForeignKey } from "sequelize-typescript";
import { IPostTag } from "../../domain/models/post-tag";
import { Post } from "./post";
import { Tag } from "./tag";
@Table({
  timestamps: true,
  paranoid: true,
  tableName: "postTag",
  modelName: "PostTag",
})
export class PostTag extends Model<IPostTag> {
  @Column({
    type: DataType.STRING(20),
    allowNull: false,
    primaryKey: true,
  })
  declare id?: string;

  @ForeignKey(() => Post) // foreign key
  @Column({
    type: DataType.STRING(128),
    allowNull: false,
  })
  postId!: string;

  @ForeignKey(() => Tag) // foreign key
  @Column({
    type: DataType.STRING(128),
    allowNull: false,
  })
  tagId!: string;
}
