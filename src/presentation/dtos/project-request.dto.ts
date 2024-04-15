// src/presentation/dtos/project-request.dto.ts

import {  IsNotEmpty, IsString, Length } from "class-validator";
import { IProject, emptyProject } from "../../domain/models/project";
import { nanoid } from "nanoid";
export class ProjectRequestDto {
  @IsNotEmpty()
  @IsString()
  @Length(10, 255)
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  @Length(10, 128)
  githubUrl: string;
  
  @IsNotEmpty()
  @IsString()
  @Length(10, 128)
  deployUrl: string;

  constructor(data: IProject) {
    this.title = data.title;
    this.description = data.description;
    this.githubUrl = data.githubUrl;
    this.deployUrl = data.deployUrl;
  }

  toData(): IProject {
    return {
      ...emptyProject,
      id: nanoid(10),
      title: this.title,
      deployUrl: this.deployUrl,
      description: this.description,
      githubUrl: this.githubUrl,
    };
  }

  toUpdateData(data: IProject): IProject {
    return {
      id: data.id,
      title: data.title,
      description: data.description,
      imageUrl: data.imageUrl,
      githubUrl: data.githubUrl,
      deployUrl: data.deployUrl,
      userId: data.userId
    }
  }
}
