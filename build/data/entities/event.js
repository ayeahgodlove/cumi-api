"use strict";
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
exports.Event = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const user_1 = require("./user");
let Event = class Event extends sequelize_typescript_1.Model {
    title;
    description;
    imageUrl;
    location;
    eventDate;
    userId;
    user;
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(20),
        allowNull: false,
        primaryKey: true,
    }),
    __metadata("design:type", String)
], Event.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(255),
        allowNull: false,
        unique: true,
    }),
    __metadata("design:type", String)
], Event.prototype, "title", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.TEXT,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Event.prototype, "description", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(128),
        allowNull: false,
    }),
    __metadata("design:type", String)
], Event.prototype, "imageUrl", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(128),
        allowNull: false,
    }),
    __metadata("design:type", String)
], Event.prototype, "location", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
        allowNull: false,
    }),
    __metadata("design:type", Date)
], Event.prototype, "eventDate", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => user_1.User) // foreign key
    ,
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(128),
        allowNull: false,
    }),
    __metadata("design:type", String)
], Event.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => user_1.User, "userId"),
    __metadata("design:type", user_1.User)
], Event.prototype, "user", void 0);
Event = __decorate([
    (0, sequelize_typescript_1.Table)({
        timestamps: true,
        paranoid: true,
        tableName: "event",
        modelName: "Event",
    })
], Event);
exports.Event = Event;
