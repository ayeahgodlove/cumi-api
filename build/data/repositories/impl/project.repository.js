"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectRepository = void 0;
const project_1 = require("../../entities/project");
const not_found_exception_1 = require("../../../shared/exceptions/not-found.exception");
class ProjectRepository {
    constructor() { }
    /**
     * Receives a Project as parameter
     * @project
     * returns void
     */
    async create(project) {
        try {
            return await project_1.Project.create({ ...project });
        }
        catch (error) {
            throw error;
        }
    }
    /**
     * Receives a String as parameter
     * @id
     * returns Project
     */
    async findById(id) {
        try {
            const projectItem = await project_1.Project.findByPk(id);
            if (!projectItem) {
                throw new not_found_exception_1.NotFoundException("Project", id);
            }
            return projectItem;
        }
        catch (error) {
            throw error;
        }
    }
    /**
     * Receives a String as parameter
     * @title
     * returns Project
     */
    async findByTitle(title) {
        try {
            const projectItem = await project_1.Project.findOne({ where: { title } });
            return projectItem;
        }
        catch (error) {
            throw error;
        }
    }
    /*
     * Returns an array of Project
     */
    async getAll() {
        try {
            const categories = await project_1.Project.findAll();
            return categories;
        }
        catch (error) {
            throw error;
        }
    }
    /**
     * Receives a Project as parameter
     * @project
     * returns void
     */
    async update(project) {
        const { id } = project;
        try {
            const projectItem = await project_1.Project.findByPk(id);
            console.log(project);
            if (!projectItem) {
                throw new not_found_exception_1.NotFoundException("Project", id.toString());
            }
            return await projectItem?.update({ ...project });
        }
        catch (error) {
            throw error;
        }
    }
    /**
     * Receives a string as parameter
     * @id
     * returns void
     */
    async delete(id) {
        try {
            const projectItem = await project_1.Project.findByPk(id);
            if (!projectItem) {
                throw new not_found_exception_1.NotFoundException("Project", id);
            }
            await projectItem?.destroy({
                force: true,
            });
        }
        catch (error) {
            throw error;
        }
    }
}
exports.ProjectRepository = ProjectRepository;
