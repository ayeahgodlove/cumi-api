import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { IProject } from "../../domain/models/project";
import { User } from "./user";
@Table({
  timestamps: true,
  paranoid: true,
  tableName: "project",
  modelName: "Project",
})
export class Project extends Model<IProject> {
  @Column({
    type: DataType.STRING(20),
    allowNull: false,
    primaryKey: true,
  })
  declare id?: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
    unique: true,
  })
  title!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  description!: string;

  @Column({
    type: DataType.STRING(128),
    allowNull: false,
  })
  imageUrl!: string;

  @Column({
    type: DataType.STRING(128),
    allowNull: false,
  })
  githubUrl!: string;

  @Column({
    type: DataType.STRING(128),
    allowNull: false,
  })
  deployUrl!: string;

  @ForeignKey(() => User) // foreign key
  @Column({
    type: DataType.STRING(128),
    allowNull: false,
  })
  userId!: string;

  @BelongsTo(() => User, "userId")
  user!: User;
}
