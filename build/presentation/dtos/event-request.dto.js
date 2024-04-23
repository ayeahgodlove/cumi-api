"use strict";
// src/presentation/dtos/event-request.dto.ts
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventRequestDto = void 0;
const class_validator_1 = require("class-validator");
const event_1 = require("../../domain/models/event");
const nanoid_1 = require("nanoid");
class EventRequestDto {
    title;
    description;
    location;
    constructor(data) {
        this.title = data.title;
        this.description = data.description;
        this.location = data.location;
    }
    toData() {
        return {
            ...event_1.emptyEvent,
            id: (0, nanoid_1.nanoid)(10),
            title: this.title,
            description: this.description,
            location: this.location,
        };
    }
    toUpdateData(data) {
        return {
            id: data.id,
            title: data.title,
            description: data.description,
            imageUrl: data.imageUrl,
            location: data.location,
            userId: data.userId,
            eventDate: data.eventDate
        };
    }
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(10, 255),
    __metadata("design:type", String)
], EventRequestDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EventRequestDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(10, 128),
    __metadata("design:type", String)
], EventRequestDto.prototype, "location", void 0);
exports.EventRequestDto = EventRequestDto;
