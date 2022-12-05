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
exports.AlgorithmController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const algorithm_create_dto_1 = require("../dto/algorithm.create.dto");
const algorithm_service_1 = require("../service/algorithm.service");
let AlgorithmController = class AlgorithmController {
    constructor(algorithmService) {
        this.algorithmService = algorithmService;
    }
    getAllAlgorithm() {
        return this.algorithmService.getAllAlgorithm();
    }
    createAlgorithm(data) {
        return this.algorithmService.createAlgorithm(data);
    }
};
__decorate([
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AlgorithmController.prototype, "getAllAlgorithm", null);
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [algorithm_create_dto_1.AlgorithmCreateDto]),
    __metadata("design:returntype", void 0)
], AlgorithmController.prototype, "createAlgorithm", null);
AlgorithmController = __decorate([
    (0, swagger_1.ApiTags)('Algorithm'),
    (0, common_1.Controller)('algorithm'),
    __metadata("design:paramtypes", [algorithm_service_1.AlgorithmService])
], AlgorithmController);
exports.AlgorithmController = AlgorithmController;
//# sourceMappingURL=algorithm.controller.js.map