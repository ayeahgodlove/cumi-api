// src/presentation/dtos/event-request.dto.ts

import {  IsNotEmpty, IsString, Length } from "class-validator";
import { IEvent, emptyEvent } from "../../domain/models/event";
import { nanoid } from "nanoid";
export class EventRequestDto {
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
  location: string;
  

  constructor(data: IEvent) {
    this.title = data.title;
    this.description = data.description;
    this.location = data.location;
  }

  toData(): IEvent {
    return {
      ...emptyEvent,
      id: nanoid(10),
      title: this.title,
      description: this.description,
      location: this.location,
    };
  }

  toUpdateData(data: IEvent): IEvent {
    return {
      id: data.id,
      title: data.title,
      description: data.description,
      imageUrl: data.imageUrl,
      location: data.location,
      userId: data.userId,
      eventDate: data.eventDate
    }
  }
}
