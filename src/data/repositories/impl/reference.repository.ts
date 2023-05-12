import { Reference } from "../../entities/reference";
import { IReference } from "../../../domain/models/reference";
import { NotFoundException } from "../../../shared/exceptions/not-found.exception";
import { IRepository } from "../contracts/repository.base";

export class ReferenceRepository implements IRepository<IReference, Reference> {
  /**
   *
   */
  constructor() {}

  /**
   * Receives a Reference as parameter
   * @reference
   * returns void
   */
  async create(reference: IReference): Promise<Reference> {
    try {
      return await Reference.create<Reference>({ ...reference });
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a String as parameter
   * @id
   * returns Reference
   */
  async findById(id: string): Promise<Reference | null> {
    try {
      const referenceItem = await Reference.findByPk(id);

      if (!referenceItem) {
        throw new NotFoundException("Reference", id);
      }
      return referenceItem;
    } catch (error) {
      throw error;
    }
  }

  /*
   * Returns an array of Reference
   */
  async getAll(): Promise<Reference[]> {
    try {
      const categories = await Reference.findAll();
      return categories;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a Reference as parameter
   * @reference
   * returns void
   */
  async update(reference: IReference): Promise<Reference> {
    const { id } = reference;
    try {
      const referenceItem: any = await Reference.findByPk(id);

      console.log(reference);
      if (!referenceItem) {
        throw new NotFoundException("Reference", id.toString());
      }

      return await referenceItem?.update({ ...reference });
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a string as parameter
   * @id
   * returns void
   */
  async delete(id: string): Promise<void> {
    try {
      const referenceItem = await Reference.findByPk(id);

      if (!referenceItem) {
        throw new NotFoundException("Reference", id);
      }

      await referenceItem?.destroy({
        force: true,
      });
    } catch (error) {
      throw error;
    }
  }
}
