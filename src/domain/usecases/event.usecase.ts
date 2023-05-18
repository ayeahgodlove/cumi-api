import { Event } from "../../data/entities/event";
import { IEventRepository } from "../../data/repositories/contracts/repository.base";
import { IEvent } from "../models/event";

export class EventUseCase {
  /**
   *
   */
  constructor(private readonly eventRepository: IEventRepository) {}

  async createEvent(event: IEvent): Promise<Event> {
    const existingEvent = await this.eventRepository.findByTitle(
      event.title
    );

    if (existingEvent) {
      throw new Error("Event already exists");
    }

    // const _event = new Event({event});
    //because it's already done in the Repository
    return this.eventRepository.create(event);
  }

  async getAll(): Promise<Event[]> {
    return this.eventRepository.getAll();
  }

  async getEventById(id: string): Promise<Event | null> {
    return this.eventRepository.findById(id);
  }

  async updateEvent(event: IEvent): Promise<Event> {
    return this.eventRepository.update(event);
  }

  async deleteEvent(id: string): Promise<void> {
    return this.eventRepository.delete(id);
  }
}
