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
exports.UserRole = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const user_1 = require("./user");
const role_1 = require("./role");
let UserRole = class UserRole extends sequelize_typescript_1.Model {
    userId;
    roleId;
};
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => user_1.User),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], UserRole.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => role_1.Role),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], UserRole.prototype, "roleId", void 0);
UserRole = __decorate([
    (0, sequelize_typescript_1.Table)({
        timestamps: true,
        paranoid: true,
        tableName: "user-role",
    })
], UserRole);
exports.UserRole = UserRole;
