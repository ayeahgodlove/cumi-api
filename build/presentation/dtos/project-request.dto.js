"use strict";
// src/presentation/dtos/project-request.dto.ts
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
exports.ProjectRequestDto = void 0;
const class_validator_1 = require("class-validator");
const project_1 = require("../../domain/models/project");
const nanoid_1 = require("nanoid");
class ProjectRequestDto {
    title;
    description;
    githubUrl;
    deployUrl;
    constructor(data) {
        this.title = data.title;
        this.description = data.description;
        this.githubUrl = data.githubUrl;
        this.deployUrl = data.deployUrl;
    }
    toData() {
        return {
            ...project_1.emptyProject,
            id: (0, nanoid_1.nanoid)(10),
            title: this.title,
            deployUrl: this.deployUrl,
            description: this.description,
            githubUrl: this.githubUrl,
        };
    }
    toUpdateData(data) {
        return {
            id: data.id,
            title: data.title,
            description: data.description,
            imageUrl: data.imageUrl,
            githubUrl: data.githubUrl,
            deployUrl: data.deployUrl,
            userId: data.userId
        };
    }
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(10, 255),
    __metadata("design:type", String)
], ProjectRequestDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProjectRequestDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(10, 128),
    __metadata("design:type", String)
], ProjectRequestDto.prototype, "githubUrl", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(10, 128),
    __metadata("design:type", String)
], ProjectRequestDto.prototype, "deployUrl", void 0);
exports.ProjectRequestDto = ProjectRequestDto;
