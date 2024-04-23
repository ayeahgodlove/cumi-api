"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsController = void 0;
const project_1 = require("../../domain/models/project");
const project_usecase_1 = require("../../domain/usecases/project.usecase");
const project_repository_1 = require("../../data/repositories/impl/project.repository");
const mapper_1 = require("../mappers/mapper");
const project_request_dto_1 = require("../dtos/project-request.dto");
const class_validator_1 = require("class-validator");
const displayValidationErrors_1 = require("../../utils/displayValidationErrors");
const not_found_exception_1 = require("../../shared/exceptions/not-found.exception");
const util_1 = require("../../utils/util");
const projectRepository = new project_repository_1.ProjectRepository();
const projectUseCase = new project_usecase_1.ProjectUseCase(projectRepository);
const projectMapper = new mapper_1.ProjectMapper();
class ProjectsController {
    async createProject(req, res) {
        const dto = new project_request_dto_1.ProjectRequestDto(req.body);
        const validationErrors = await (0, class_validator_1.validate)(dto);
        const user = req.user;
        if (validationErrors.length > 0) {
            res.status(400).json({
                validationErrors: (0, displayValidationErrors_1.displayValidationErrors)(validationErrors),
                success: false,
                data: null,
                message: "Attention!",
            });
        }
        else {
            try {
                const projectResponse = await projectUseCase.createProject({
                    ...dto.toData(),
                    userId: user.id,
                    imageUrl: req.body.imageUrl,
                });
                res.status(201).json({
                    data: projectResponse.toJSON(),
                    message: "Project created Successfully!",
                    validationErrors: [],
                    success: true,
                });
            }
            catch (error) {
                res.status(400).json({
                    data: null,
                    message: error.message,
                    validationErrors: [],
                    success: false,
                });
            }
        }
    }
    async getAll(req, res) {
        try {
            const projects = await projectUseCase.getAll();
            const projectsDTO = projectMapper.toDTOs(projects);
            res.json(projectsDTO);
        }
        catch (error) {
            res.status(400).json({
                data: null,
                message: error.message,
                validationErrors: [error],
                success: false,
            });
        }
    }
    async getProjectById(req, res) {
        try {
            const id = req.params.id;
            const project = await projectUseCase.getProjectById(id);
            if (!project) {
                throw new not_found_exception_1.NotFoundException("Project", id);
            }
            const projectDTO = projectMapper.toDTO(project);
            res.json(projectDTO);
        }
        catch (error) {
            res.status(400).json({
                data: null,
                message: error.message,
                validationErrors: [error],
                success: false,
            });
        }
    }
    async updateProject(req, res) {
        const dto = new project_request_dto_1.ProjectRequestDto(req.body);
        const validationErrors = await (0, class_validator_1.validate)(dto);
        const user = req.user;
        if (validationErrors.length > 0) {
            res.status(400).json({
                validationErrors: (0, displayValidationErrors_1.displayValidationErrors)(validationErrors),
                success: false,
                data: null,
                message: "Attention!",
            });
        }
        else {
            try {
                const id = req.params.id;
                const project = await projectUseCase.getProjectById(id);
                if (project) {
                    (0, util_1.deleteFile)(project.dataValues.imageUrl, "projects");
                }
                const obj = {
                    ...project_1.emptyProject,
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
            }
            catch (error) {
                res.status(400).json({
                    data: null,
                    message: error.message,
                    validationErrors: [error],
                    success: false,
                });
            }
        }
    }
    async deleteProject(req, res) {
        try {
            const id = req.params.id;
            const project = await projectUseCase.getProjectById(id);
            if (project) {
                (0, util_1.deleteFile)(project.dataValues.imageUrl, "projects");
            }
            await projectUseCase.deleteProject(id);
            res.status(204).json({
                message: `Operation successfully completed!`,
                validationErrors: [],
                success: true,
                data: null,
            });
        }
        catch (error) {
            res.status(400).json({
                message: error.message,
                data: null,
                validationErrors: [error],
                success: true,
            });
        }
    }
}
exports.ProjectsController = ProjectsController;
