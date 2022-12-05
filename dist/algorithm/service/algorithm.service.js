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
exports.AlgorithmService = void 0;
const common_1 = require("@nestjs/common");
const algorithm_repository_1 = require("../repository/algorithm.repository");
let AlgorithmService = class AlgorithmService {
    constructor(algorithmRepository) {
        this.algorithmRepository = algorithmRepository;
    }
    async getAllAlgorithm() {
        const allAlgorithm = await this.algorithmRepository.findAll();
        const algorithmLists = [];
        allAlgorithm.forEach((algorithm) => {
            const _result = Object.assign({ id: algorithm.id }, algorithm.readOnlyData);
            return algorithmLists.push(_result);
        });
        return algorithmLists;
    }
    async createAlgorithm(data) {
        const algorithm = await this.algorithmRepository.create(Object.assign({}, data));
        return algorithm.readOnlyData;
    }
};
AlgorithmService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [algorithm_repository_1.AlgorithmRepository])
], AlgorithmService);
exports.AlgorithmService = AlgorithmService;
//# sourceMappingURL=algorithm.service.js.map