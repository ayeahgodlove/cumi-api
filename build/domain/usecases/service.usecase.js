"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceUseCase = void 0;
class ServiceUseCase {
    serviceRepository;
    /**
     *
     */
    constructor(serviceRepository) {
        this.serviceRepository = serviceRepository;
    }
    async createService(service) {
        const existingService = await this.serviceRepository.findByTitle(service.title);
        if (existingService) {
            throw new Error("Service already exists");
        }
        // const _service = new Service({service});
        //because it's already done in the Repository
        return this.serviceRepository.create(service);
    }
    async getAll() {
        return this.serviceRepository.getAll();
    }
    async getServiceById(id) {
        return this.serviceRepository.findById(id);
    }
    async updateService(service) {
        return this.serviceRepository.update(service);
    }
    async deleteService(id) {
        return this.serviceRepository.delete(id);
    }
}
exports.ServiceUseCase = ServiceUseCase;
