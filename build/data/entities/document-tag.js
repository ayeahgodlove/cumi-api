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
exports.DocumentTag = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const tag_1 = require("./tag");
const document_1 = require("./document");
let DocumentTag = class DocumentTag extends sequelize_typescript_1.Model {
    documentId;
    tagId;
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(20),
        allowNull: false,
        primaryKey: true,
    }),
    __metadata("design:type", String)
], DocumentTag.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => document_1.DocumentFile) // foreign key
    ,
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(128),
        allowNull: false,
    }),
    __metadata("design:type", String)
], DocumentTag.prototype, "documentId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => tag_1.Tag) // foreign key
    ,
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(128),
        allowNull: false,
    }),
    __metadata("design:type", String)
], DocumentTag.prototype, "tagId", void 0);
DocumentTag = __decorate([
    (0, sequelize_typescript_1.Table)({
        timestamps: true,
        paranoid: true,
        tableName: "documentTag",
        modelName: "DocumentTag",
    })
], DocumentTag);
exports.DocumentTag = DocumentTag;
