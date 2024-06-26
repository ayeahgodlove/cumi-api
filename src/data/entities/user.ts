import {
  Table,
  Model,
  Column,
  DataType,
  HasMany,
  BelongsToMany,
} from "sequelize-typescript";
import { IUser } from "../../domain/models/user";
import { Role } from "./role";
import { Post } from "./post";
import { DocumentFile } from "./document";
import { Comment } from "./comment";
import { UserRole } from "./user-role";
@Table({
  timestamps: true,
  paranoid: true,
  tableName: "user",
  modelName: "User"
})
export class User extends Model<IUser> {
  @Column({
    type: DataType.STRING(50),
    allowNull: false,
    primaryKey: true,
  })
  declare id: string;
  @Column({
    type: DataType.STRING(10),
    allowNull: false,
  })
  authStrategy!: string;

  @Column({
    type: DataType.STRING(50),
    allowNull: false,
    unique: true,
  })
  username!: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: true,
  })
  avatar!: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
    unique: true,
  })
  email!: string;

  @Column({
    type: DataType.STRING(13),
  })
  phoneNumber!: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: true,
  })
  address!: string;

  @Column({
    type: DataType.DECIMAL,
    allowNull: true,
  })
  lat!: number;

  @Column({
    type: DataType.DECIMAL,
    allowNull: true,
  })
  long!: number;

  @Column({
    type: DataType.STRING(255),
    allowNull: true,
    unique: true,
  })
  password!: string;

  // relationships
  @HasMany(() => DocumentFile)
  documents!: DocumentFile[];

  @HasMany(() => Post)
  posts!: Post[];

  @HasMany(() => Comment)
  comments!: Comment[];

  // Define the many-to-many association with Role
  @BelongsToMany(() => Role, () => UserRole, "roleId", "userId")
  roles!: Role[];
}
