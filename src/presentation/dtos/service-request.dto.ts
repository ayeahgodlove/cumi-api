// src/presentation/dtos/service-request.dto.ts

import { IsNotEmpty, IsString, Length } from "class-validator";
import { IService, emptyService } from "../../domain/models/service";
import { nanoid } from "nanoid";
export class ServiceRequestDto {
  @IsNotEmpty()
  @IsString()
  @Length(10, 255)
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  icon: string;

  constructor(data: IService) {
    this.title = data.title;
    this.description = data.description;
    this.icon = data.icon;
  }

  toData(): IService {
    return {
      ...emptyService,
      id: nanoid(10),
      title: this.title,
      description: this.description,
      icon: this.icon,
    };
  }

  toUpdateData(data: IService): IService {
    return {
      id: data.id,
      title: data.title,
      description: data.description,
      userId: data.userId,
      icon: data.icon,
    };
  }
}
