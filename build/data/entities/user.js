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
exports.User = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const role_1 = require("./role");
const post_1 = require("./post");
const document_1 = require("./document");
const comment_1 = require("./comment");
const user_role_1 = require("./user-role");
let User = class User extends sequelize_typescript_1.Model {
    authStrategy;
    username;
    avatar;
    email;
    phoneNumber;
    address;
    lat;
    long;
    password;
    // relationships
    documents;
    posts;
    comments;
    // Define the many-to-many association with Role
    roles;
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(50),
        allowNull: false,
        primaryKey: true,
    }),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(10),
        allowNull: false,
    }),
    __metadata("design:type", String)
], User.prototype, "authStrategy", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(50),
        allowNull: false,
        unique: true,
    }),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(255),
        allowNull: true,
    }),
    __metadata("design:type", String)
], User.prototype, "avatar", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(255),
        allowNull: false,
        unique: true,
    }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(13),
    }),
    __metadata("design:type", String)
], User.prototype, "phoneNumber", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(255),
        allowNull: true,
    }),
    __metadata("design:type", String)
], User.prototype, "address", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DECIMAL,
        allowNull: true,
    }),
    __metadata("design:type", Number)
], User.prototype, "lat", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DECIMAL,
        allowNull: true,
    }),
    __metadata("design:type", Number)
], User.prototype, "long", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(255),
        allowNull: true,
        unique: true,
    }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => document_1.DocumentFile),
    __metadata("design:type", Array)
], User.prototype, "documents", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => post_1.Post),
    __metadata("design:type", Array)
], User.prototype, "posts", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => comment_1.Comment),
    __metadata("design:type", Array)
], User.prototype, "comments", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => role_1.Role, () => user_role_1.UserRole, "roleId", "userId"),
    __metadata("design:type", Array)
], User.prototype, "roles", void 0);
User = __decorate([
    (0, sequelize_typescript_1.Table)({
        timestamps: true,
        paranoid: true,
        tableName: "user",
        modelName: "User"
    })
], User);
exports.User = User;
