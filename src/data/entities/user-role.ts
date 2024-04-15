import {
  Table,
  Model,
  Column,
  ForeignKey,
} from "sequelize-typescript";
import { IUserRole } from "../../domain/models/user-role";
import { User } from "./user";
import { Role } from "./role";
@Table({
  timestamps: true,
  paranoid: true,
  tableName: "user-role",
})
export class UserRole extends Model<IUserRole> {
  @ForeignKey(() => User)
  @Column
  userId!: number;

  @ForeignKey(() => Role)
  @Column
  roleId!: number;
}
