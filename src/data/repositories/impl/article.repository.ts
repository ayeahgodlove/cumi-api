import { Article } from "../../entities/article";
import { IArticle } from "../../../domain/models/article";
import { NotFoundException } from "../../../shared/exceptions/not-found.exception";
import { IArticleRepository } from "../contracts/repository.base";

export class ArticleRepository implements IArticleRepository {
  /**
   *
   */
  constructor() {}

  /**
   * Receives a Article as parameter
   * @article
   * returns void
   */
  async create(article: IArticle): Promise<Article> {
    try {
      return await Article.create<Article>({ ...article });
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a String as parameter
   * @title
   * returns Category
   */
  async findByTitle(title: string): Promise<Article | null> {
    try {
      const artilArticle = await Article.findOne({ where: { title } });
      return artilArticle;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a String as parameter
   * @id
   * returns Article
   */
  async findById(id: string): Promise<Article | null> {
    try {
      const articleItem = await Article.findByPk(id);

      if (!articleItem) {
        throw new NotFoundException("Article", id);
      }
      return articleItem;
    } catch (error) {
      throw error;
    }
  }

  /*
   * Returns an array of Article
   */
  async getAll(): Promise<Article[]> {
    try {
      const categories = await Article.findAll();
      return categories;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a Article as parameter
   * @article
   * returns void
   */
  async update(article: IArticle): Promise<Article> {
    const { id } = article;
    try {
      const articleItem: any = await Article.findByPk(id);

      console.log(article);
      if (!articleItem) {
        throw new NotFoundException("Article", id.toString());
      }

      return await articleItem?.update({ ...article });
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
      const articleItem = await Article.findByPk(id);

      if (!articleItem) {
        throw new NotFoundException("Article", id);
      }

      await articleItem?.destroy({
        force: true,
      });
    } catch (error) {
      throw error;
    }
  }
}
