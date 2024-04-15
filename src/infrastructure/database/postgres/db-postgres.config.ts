/**
 * Set-by-step build Node.js Resful CRUD API using Express, Sequelize with MySQL
 * Sequelize is a promise-based Node.j ORM that supports the dialects for Postgres, MysQL, and SQL server
 * Sequelize with MySQL
 */

import { Sequelize } from "sequelize-typescript";
import { Category } from "../../../data/entities/category";

import * as dotenv from "dotenv";
import { User } from "../../../data/entities/user";
import { Role } from "../../../data/entities/role";
import { Post } from "../../../data/entities/post";
import { DocumentFile } from "../../../data/entities/document";
import { Tag } from "../../../data/entities/tag";
import { Comment } from "../../../data/entities/comment";
import { PostTag } from "../../../data/entities/post-tag";
import { DocumentTag } from "../../../data/entities/document-tag";
import { Project } from "../../../data/entities/project";
import { Event } from "../../../data/entities/event";
import { Service } from "../../../data/entities/service";
import { UserRole } from "../../../data/entities/user-role";
import { Banner } from "../../../data/entities/banner";
dotenv.config();

export class PostgresDbConfig {
  private readonly _sequelize!: Sequelize;
  /**
   *
   */
  constructor() {
    this._sequelize = new Sequelize({
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB,
      port: parseInt(process.env.DB_PORT!),
      host: process.env.HOST,
      dialect: "postgres",
      models: [
        User,
        Role,
        UserRole,
        Category,
        Tag,
        Post,
        DocumentFile,
        Comment,
        PostTag,
        DocumentTag,
        Project,
        Event,
        Banner,
        Service
      ],
      logging: false,
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
      },
    });
  } 

  public get sequelize(){
    return this._sequelize;
  }

  connection = async () => {
    try {
      await this.sequelize.authenticate();
      console.log("Postgres connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the postgres database:", error);
    }
  };
}
