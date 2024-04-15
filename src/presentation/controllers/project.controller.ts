import { Request, Response } from "express";
import {
  IProject,
  IProjectResponse,
  emptyProject,
} from "../../domain/models/project";
import { ProjectUseCase } from "../../domain/usecases/project.usecase";
import { ProjectRepository } from "../../data/repositories/impl/project.repository";
import { ProjectMapper } from "../mappers/mapper";
import { ProjectRequestDto } from "../dtos/project-request.dto";
import { validate } from "class-validator";
import { displayValidationErrors } from "../../utils/displayValidationErrors";
import { NotFoundException } from "../../shared/exceptions/not-found.exception";
import { User } from "../../data/entities/user";
import { deleteFile } from "../../utils/util";

const projectRepository = new ProjectRepository();
const projectUseCase = new ProjectUseCase(projectRepository);
const projectMapper = new ProjectMapper();

export class ProjectsController {
  async createProject(
    req: Request,
    res: Response<IProjectResponse>
  ): Promise<void> {
    const dto = new ProjectRequestDto(req.body);
    const validationErrors = await validate(dto);
    const user = req.user as User;

    if (validationErrors.length > 0) {
      res.status(400).json({
        validationErrors: displayValidationErrors(validationErrors) as any,
        success: false,
        data: null,
        message: "Attention!",
      });
    } else {
      try {
        const projectResponse = await projectUseCase.createProject({
          ...dto.toData(),
          userId: user.id,
          imageUrl: req.body.imageUrl,
        });

        res.status(201).json({
          data: projectResponse.toJSON<IProject>(),
          message: "Project created Successfully!",
          validationErrors: [],
          success: true,
        });
      } catch (error: any) {
        res.status(400).json({
          data: null,
          message: error.message,
          validationErrors: [],
          success: false,
        });
      }
    }
  }

  async getAll(req: Request, res: Response<any>): Promise<void> {
    try {
      const projects = await projectUseCase.getAll();
      const projectsDTO = projectMapper.toDTOs(projects);

      res.json(projectsDTO);
    } catch (error: any) {
      res.status(400).json({
        data: null,
        message: error.message,
        validationErrors: [error],
        success: false,
      });
    }
  }

  async getProjectById(req: Request, res: Response<any>): Promise<void> {
    try {
      const id = req.params.id;

      const project = await projectUseCase.getProjectById(id);
      if (!project) {
        throw new NotFoundException("Project", id);
      }
      const projectDTO = projectMapper.toDTO(project);
      res.json(projectDTO);
    } catch (error: any) {
      res.status(400).json({
        data: null,
        message: error.message,
        validationErrors: [error],
        success: false,
      });
    }
  }

  async updateProject(
    req: Request,
    res: Response<IProjectResponse>
  ): Promise<void> {
    const dto = new ProjectRequestDto(req.body);
    const validationErrors = await validate(dto);
    const user = req.user as User;

    if (validationErrors.length > 0) {
      res.status(400).json({
        validationErrors: displayValidationErrors(validationErrors) as any,
        success: false,
        data: null,
        message: "Attention!",
      });
    } else {
      try {
        const id = req.params.id;
        const project = await projectUseCase.getProjectById(id);

        if (project) {
          deleteFile(project.dataValues.imageUrl, "projects");
        }

        const obj: IProject = {
          ...emptyProject,
          ...req.body,
          id: id,
          imageUrl: req.body.imageUrl,
          userId: user.id,
        };
        const updatedProject = await projectUseCase.updateProject(obj);
        const projectDto = projectMapper.toDTO(updatedProject);

        res.json({
          data: projectDto,
          message: "Project Updated Successfully!",
          validationErrors: [],
          success: true,
        });
      } catch (error: any) {
        res.status(400).json({
          data: null,
          message: error.message,
          validationErrors: [error],
          success: false,
        });
      }
    }
  }

  async deleteProject(
    req: Request,
    res: Response<IProjectResponse>
  ): Promise<void> {
    try {
      const id = req.params.id;
      const project = await projectUseCase.getProjectById(id);

      if (project) {
        deleteFile(project.dataValues.imageUrl, "projects");
      }

      await projectUseCase.deleteProject(id);

      res.status(204).json({
        message: `Operation successfully completed!`,
        validationErrors: [],
        success: true,
        data: null,
      });
    } catch (error: any) {
      res.status(400).json({
        message: error.message,
        data: null,
        validationErrors: [error],
        success: true,
      });
    }
  }
}
