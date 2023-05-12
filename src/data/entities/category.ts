import { Table, Model, Column, DataType, HasMany } from "sequelize-typescript";
import { ICategory } from "../../domain/models/category";
import { DocumentFile } from "./document";
import { Post } from "./post";
@Table({
  timestamps: true,
  paranoid: true,
  tableName: "category",
  modelName: "Category",
})
export class Category extends Model<ICategory> {
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

  @HasMany(() => DocumentFile)
  documents!: DocumentFile[];

  @HasMany(() => Post)
  posts!: Post[];
}
