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
exports.ToyProjectsRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const toy_projects_schema_1 = require("../schema/toy-projects.schema");
let ToyProjectsRepository = class ToyProjectsRepository {
    constructor(toyProjectModel) {
        this.toyProjectModel = toyProjectModel;
    }
    async findAll() {
        const result = await this.toyProjectModel.find();
        return result;
    }
    async find(filter) {
        const result = await this.toyProjectModel.find(filter);
        return result;
    }
    async findEid(gameName) {
        const result = await this.toyProjectModel.findOne({
            where: {
                gameName,
            },
        });
        return result.id;
    }
};
ToyProjectsRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(toy_projects_schema_1.ToyProjects.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ToyProjectsRepository);
exports.ToyProjectsRepository = ToyProjectsRepository;
//# sourceMappingURL=toy-projects.repository.js.map