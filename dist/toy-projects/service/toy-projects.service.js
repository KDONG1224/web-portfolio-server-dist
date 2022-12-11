"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToyProjectsService = void 0;
const common_1 = require("@nestjs/common");
const toy_projects_repository_1 = require("../repository/toy-projects.repository");
let ToyProjectsService = class ToyProjectsService {
    constructor(toyProjectsRepository) {
        this.toyProjectsRepository = toyProjectsRepository;
    }
    async getAllToyProjects() {
        const allToyProjects = await this.toyProjectsRepository.findAll();
        return allToyProjects;
    }
    async getToyProject(filter) {
        const toyproject = await this.toyProjectsRepository.find(filter);
        return toyproject;
    }
    async getEid(gameName) {
        const eId = await this.toyProjectsRepository.findEid(gameName);
        return eId;
    }
};
ToyProjectsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [toy_projects_repository_1.ToyProjectsRepository])
], ToyProjectsService);
exports.ToyProjectsService = ToyProjectsService;
//# sourceMappingURL=toy-projects.service.js.map