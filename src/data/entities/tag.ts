import { Table, Model, Column, DataType, BelongsToMany } from "sequelize-typescript";
import { ITag } from "../../domain/models/tag";
import { PostTag } from "./post-tag";
import { Post } from "./post";
import { DocumentTag } from "./document-tag";
import { DocumentFile } from "./document";
@Table({
  timestamps: true,
  paranoid: true,
  tableName: "tag",
  modelName: "Tag",
})
export class Tag extends Model<ITag> {
  @Column({
    type: DataType.STRING(20),
    allowNull: false,
    primaryKey: true,
  })
  declare id?: string;

  @Column({
    type: DataType.STRING(50),
    allowNull: false,
    unique: true,
  })
  name!: string;

  @Column({
    type: DataType.STRING(128),
    allowNull: false,
    unique: true,
  })
  slug!: string;

  @BelongsToMany(() => Post, () => PostTag, "tagId", "postId")
  posts!: Post[];

  @BelongsToMany(() => DocumentFile, () => DocumentTag, "tagId", "documentId")
  documents!: DocumentFile[];
}
