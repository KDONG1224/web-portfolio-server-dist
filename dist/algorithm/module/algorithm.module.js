"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlgorithmModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const algorithm_controller_1 = require("../controller/algorithm.controller");
const algorithm_repository_1 = require("../repository/algorithm.repository");
const algorithm_schema_1 = require("../schema/algorithm.schema");
const algorithm_service_1 = require("../service/algorithm.service");
let AlgorithmModule = class AlgorithmModule {
};
AlgorithmModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            mongoose_1.MongooseModule.forFeature([
                { name: algorithm_schema_1.Algorithm.name, schema: algorithm_schema_1.AlgorithmSchema },
            ]),
        ],
        controllers: [algorithm_controller_1.AlgorithmController],
        providers: [algorithm_service_1.AlgorithmService, algorithm_repository_1.AlgorithmRepository],
        exports: [algorithm_service_1.AlgorithmService, algorithm_repository_1.AlgorithmRepository],
    })
], AlgorithmModule);
exports.AlgorithmModule = AlgorithmModule;
//# sourceMappingURL=algorithm.module.js.map