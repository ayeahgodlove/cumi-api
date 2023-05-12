import { Tag } from "../../data/entities/tag";
import { ITagRepository } from "../../data/repositories/contracts/repository.base";
import { ITag } from "../models/tag";
import slugify from "slugify";
export class TagUseCase {
  /**
   *
   */
  constructor(private readonly tagRepository: ITagRepository) {}

  async createTag(tag: ITag): Promise<Tag> {
    const existingTag = await this.tagRepository.findByName(tag.name);

    if (existingTag) {
      throw new Error("Tag already exists");
    }

    // const _tag = new Tag({tag});
    //because it's already done in the Repository
    return this.tagRepository.create(tag);
  }

  async getAll(): Promise<Tag[]> {
    return this.tagRepository.getAll();
  }

  async getTagById(id: string): Promise<Tag | null> {
    return this.tagRepository.findById(id);
  }

  async updateTag(tag: ITag): Promise<Tag> {
    const obj: ITag = {
      ...tag,
      slug: slugify(tag.name, { lower: true, replacement: "-" }),
    };
    return this.tagRepository.update(obj);
  }

  async deleteTag(id: string): Promise<void> {
    return this.tagRepository.delete(id);
  }
}
