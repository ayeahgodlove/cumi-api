import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { IEvent } from "../../domain/models/event";
import { User } from "./user";
@Table({
  timestamps: true,
  paranoid: true,
  tableName: "event",
  modelName: "Event",
})
export class Event extends Model<IEvent> {
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
    type: DataType.STRING(255),
    allowNull: false,
  })
  location!: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  eventDate!: Date;

  @ForeignKey(() => User) // foreign key
  @Column({
    type: DataType.STRING(128),
    allowNull: false,
  })
  userId!: string;

  @BelongsTo(() => User, "userId")
  user!: User;
}
