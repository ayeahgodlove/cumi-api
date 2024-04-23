"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectUseCase = void 0;
class ProjectUseCase {
    projectRepository;
    /**
     *
     */
    constructor(projectRepository) {
        this.projectRepository = projectRepository;
    }
    async createProject(project) {
        const existingProject = await this.projectRepository.findByTitle(project.title);
        if (existingProject) {
            throw new Error("Project already exists");
        }
        // const _project = new Project({project});
        //because it's already done in the Repository
        return this.projectRepository.create(project);
    }
    async getAll() {
        return this.projectRepository.getAll();
    }
    async getProjectById(id) {
        return this.projectRepository.findById(id);
    }
    async updateProject(project) {
        return this.projectRepository.update(project);
    }
    async deleteProject(id) {
        return this.projectRepository.delete(id);
    }
}
exports.ProjectUseCase = ProjectUseCase;
