"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagUseCase = void 0;
const slugify_1 = __importDefault(require("slugify"));
class TagUseCase {
    tagRepository;
    /**
     *
     */
    constructor(tagRepository) {
        this.tagRepository = tagRepository;
    }
    async createTag(tag) {
        const existingTag = await this.tagRepository.findByName(tag.name);
        if (existingTag) {
            throw new Error("Tag already exists");
        }
        // const _tag = new Tag({tag});
        //because it's already done in the Repository
        return this.tagRepository.create(tag);
    }
    async getAll() {
        return this.tagRepository.getAll();
    }
    async getTagById(id) {
        return this.tagRepository.findById(id);
    }
    async updateTag(tag) {
        const obj = {
            ...tag,
            slug: (0, slugify_1.default)(tag.name, { lower: true, replacement: "-" }),
        };
        return this.tagRepository.update(obj);
    }
    async deleteTag(id) {
        return this.tagRepository.delete(id);
    }
}
exports.TagUseCase = TagUseCase;
