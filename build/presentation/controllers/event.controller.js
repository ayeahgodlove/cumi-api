"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsController = void 0;
const event_1 = require("../../domain/models/event");
const event_usecase_1 = require("../../domain/usecases/event.usecase");
const event_repository_1 = require("../../data/repositories/impl/event.repository");
const mapper_1 = require("../mappers/mapper");
const event_request_dto_1 = require("../dtos/event-request.dto");
const class_validator_1 = require("class-validator");
const displayValidationErrors_1 = require("../../utils/displayValidationErrors");
const not_found_exception_1 = require("../../shared/exceptions/not-found.exception");
const util_1 = require("../../utils/util");
const eventRepository = new event_repository_1.EventRepository();
const eventUseCase = new event_usecase_1.EventUseCase(eventRepository);
const eventMapper = new mapper_1.EventMapper();
class EventsController {
    async createEvent(req, res) {
        const dto = new event_request_dto_1.EventRequestDto(req.body);
        const validationErrors = await (0, class_validator_1.validate)(dto);
        const user = req.user;
        if (validationErrors.length > 0) {
            res.status(400).json({
                validationErrors: (0, displayValidationErrors_1.displayValidationErrors)(validationErrors),
                success: false,
                data: null,
                message: "Attention!",
            });
        }
        else {
            try {
                const eventResponse = await eventUseCase.createEvent({
                    ...dto.toData(),
                    userId: user.id,
                    imageUrl: req.body.imageUrl,
                });
                res.status(201).json({
                    data: eventResponse.toJSON(),
                    message: "Event created Successfully!",
                    validationErrors: [],
                    success: true,
                });
            }
            catch (error) {
                res.status(400).json({
                    data: null,
                    message: error.message,
                    validationErrors: [],
                    success: false,
                });
            }
        }
    }
    async getAll(req, res) {
        try {
            const events = await eventUseCase.getAll();
            const eventsDTO = eventMapper.toDTOs(events);
            res.json(eventsDTO);
        }
        catch (error) {
            res.status(400).json({
                data: null,
                message: error.message,
                validationErrors: [error],
                success: false,
            });
        }
    }
    async getEventById(req, res) {
        try {
            const id = req.params.id;
            const event = await eventUseCase.getEventById(id);
            if (!event) {
                throw new not_found_exception_1.NotFoundException("Event", id);
            }
            const eventDTO = eventMapper.toDTO(event);
            res.json(eventDTO);
        }
        catch (error) {
            res.status(400).json({
                data: null,
                message: error.message,
                validationErrors: [error],
                success: false,
            });
        }
    }
    async updateEvent(req, res) {
        const dto = new event_request_dto_1.EventRequestDto(req.body);
        const validationErrors = await (0, class_validator_1.validate)(dto);
        const user = req.user;
        if (validationErrors.length > 0) {
            res.status(400).json({
                validationErrors: (0, displayValidationErrors_1.displayValidationErrors)(validationErrors),
                success: false,
                data: null,
                message: "Attention!",
            });
        }
        else {
            try {
                const id = req.params.id;
                const event = await eventUseCase.getEventById(id);
                if (event) {
                    (0, util_1.deleteFile)(event.dataValues.imageUrl, "events");
                }
                const obj = {
                    ...event_1.emptyEvent,
                    ...req.body,
                    id: id,
                    imageUrl: req.body.imageUrl,
                    userId: user.id || req.body.userId,
                };
                const updatedEvent = await eventUseCase.updateEvent(obj);
                const eventDto = eventMapper.toDTO(updatedEvent);
                res.json({
                    data: eventDto,
                    message: "Event Updated Successfully!",
                    validationErrors: [],
                    success: true,
                });
            }
            catch (error) {
                res.status(400).json({
                    data: null,
                    message: error.message,
                    validationErrors: [error],
                    success: false,
                });
            }
        }
    }
    async deleteEvent(req, res) {
        try {
            const id = req.params.id;
            const event = await eventUseCase.getEventById(id);
            if (event) {
                (0, util_1.deleteFile)(event.dataValues.imageUrl, "events");
            }
            await eventUseCase.deleteEvent(id);
            res.status(204).json({
                message: `Operation successfully completed!`,
                validationErrors: [],
                success: true,
                data: null,
            });
        }
        catch (error) {
            res.status(400).json({
                message: error.message,
                data: null,
                validationErrors: [error],
                success: true,
            });
        }
    }
}
exports.EventsController = EventsController;
