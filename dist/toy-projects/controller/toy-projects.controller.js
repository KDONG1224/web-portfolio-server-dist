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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToyProjectsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const toy_projects_service_1 = require("../service/toy-projects.service");
let ToyProjectsController = class ToyProjectsController {
    constructor(toyProjectsService) {
        this.toyProjectsService = toyProjectsService;
    }
    getAllToyProjects() {
        return this.toyProjectsService.getAllToyProjects();
    }
    getToyProject(filter) {
        return this.toyProjectsService.getToyProject(filter);
    }
    getEidFind(gameName) {
        return this.toyProjectsService.getEid(gameName);
    }
};
__decorate([
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ToyProjectsController.prototype, "getAllToyProjects", null);
__decorate([
    (0, common_1.Get)('/:filter'),
    __param(0, (0, common_1.Param)('filter')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ToyProjectsController.prototype, "getToyProject", null);
__decorate([
    (0, common_1.Get)('eIdFind/:gameName'),
    __param(0, (0, common_1.Param)('gameName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ToyProjectsController.prototype, "getEidFind", null);
ToyProjectsController = __decorate([
    (0, swagger_1.ApiTags)('Toy-Projects'),
    (0, common_1.Controller)('toy-projects'),
    __metadata("design:paramtypes", [toy_projects_service_1.ToyProjectsService])
], ToyProjectsController);
exports.ToyProjectsController = ToyProjectsController;
//# sourceMappingURL=toy-projects.controller.js.map