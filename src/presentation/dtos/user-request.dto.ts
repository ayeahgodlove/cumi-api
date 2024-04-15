// src/presentation/dtos/user-request.dto.ts

import { IsNotEmpty, IsString, Length } from "class-validator";
import { IUser, emptyUser } from "../../domain/models/user";
import { nanoid } from "nanoid";
export class UserRequestDto {
  @IsNotEmpty()
  @IsString()
  @Length(4, 25)
  username: string;

  @IsNotEmpty()
  @IsString()
  email: string;


  @IsNotEmpty()
  @IsString()
  @Length(8)
  password: string;

  @IsNotEmpty()
  @IsString()
  phoneNumber!: string;

  @IsNotEmpty()
  @IsString()
  address!: string;

  constructor(data: IUser) {
    this.username = data.username;
    this.email = data.email;
    this.password = data.password;
    this.address = data.address;
    this.phoneNumber = data.phoneNumber;
  }

  toData(): IUser {
    return {
      ...emptyUser,
      id: nanoid(15),
      username: this.username,
      email: this.email,
      password: this.password,
      address: this.address,
      phoneNumber: this.phoneNumber,
    };
  }

  toUpdateData(data: IUser): IUser {
    return {
      id: data.id,
      username: data.username,
      email: data.email,
      phoneNumber: data.phoneNumber,
      password: data.password,
      address: data.address,
      authStrategy: data.authStrategy,
      avatar: data.avatar,
      dateRegistered: data.dateRegistered,
      lat: 0,
      long: 0
    };
  }
}
