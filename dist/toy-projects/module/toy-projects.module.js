"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToyProjectsModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const toy_projects_controller_1 = require("../controller/toy-projects.controller");
const toy_projects_repository_1 = require("../repository/toy-projects.repository");
const toy_projects_schema_1 = require("../schema/toy-projects.schema");
const toy_projects_service_1 = require("../service/toy-projects.service");
let ToyProjectsModule = class ToyProjectsModule {
};
ToyProjectsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            mongoose_1.MongooseModule.forFeature([
                { name: toy_projects_schema_1.ToyProjects.name, schema: toy_projects_schema_1.ToyProjectsSchema },
            ]),
        ],
        controllers: [toy_projects_controller_1.ToyProjectsController],
        providers: [toy_projects_service_1.ToyProjectsService, toy_projects_repository_1.ToyProjectsRepository],
        exports: [toy_projects_service_1.ToyProjectsService, toy_projects_repository_1.ToyProjectsRepository],
    })
], ToyProjectsModule);
exports.ToyProjectsModule = ToyProjectsModule;
//# sourceMappingURL=toy-projects.module.js.map