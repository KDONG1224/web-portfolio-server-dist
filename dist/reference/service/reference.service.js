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
exports.ReferenceService = void 0;
const common_1 = require("@nestjs/common");
const reference_repository_1 = require("../repository/reference.repository");
let ReferenceService = class ReferenceService {
    constructor(referenceRepository) {
        this.referenceRepository = referenceRepository;
    }
    async getAllReference() {
        const allReference = await this.referenceRepository.findAll();
        return allReference;
    }
    async getReferenceLists(filter) {
        const referenceLists = await this.referenceRepository.find(filter);
        return referenceLists;
    }
    async createReference(createReferenceData, files) {
        const create = await this.referenceRepository.create(createReferenceData, files);
        return create.readOnlyData;
    }
    async updateReference(id, files, datas) {
        const update = await this.referenceRepository.update(id, files, datas);
        return update.readOnlyData;
    }
};
ReferenceService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [reference_repository_1.ReferenceRepository])
], ReferenceService);
exports.ReferenceService = ReferenceService;
//# sourceMappingURL=reference.service.js.map