import { Table, Model, Column, DataType, ForeignKey } from "sequelize-typescript";
import { IDocumentTag } from "../../domain/models/document-tag";
import { Tag } from "./tag";
import { DocumentFile } from "./document";
@Table({
  timestamps: true,
  paranoid: true,
  tableName: "documentTag",
  modelName: "DocumentTag",
})
export class DocumentTag extends Model<IDocumentTag> {
  @Column({
    type: DataType.STRING(20),
    allowNull: false,
    primaryKey: true,
  })
  declare id?: string;

  @ForeignKey(() => DocumentFile) // foreign key
  @Column({
    type: DataType.STRING(128),
    allowNull: false,
  })
  documentId!: string;

  @ForeignKey(() => Tag) // foreign key
  @Column({
    type: DataType.STRING(128),
    allowNull: false,
  })
  tagId!: string;
}
