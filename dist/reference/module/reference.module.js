"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferenceModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const aws_upload_module_1 = require("../../aws-upload/module/aws-upload.module");
const reference_controller_1 = require("../controller/reference.controller");
const reference_repository_1 = require("../repository/reference.repository");
const reference_schema_1 = require("../schema/reference.schema");
const reference_service_1 = require("../service/reference.service");
let ReferenceModule = class ReferenceModule {
};
ReferenceModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            mongoose_1.MongooseModule.forFeature([
                { name: reference_schema_1.Reference.name, schema: reference_schema_1.ReferenceSchema },
            ]),
            (0, common_1.forwardRef)(() => aws_upload_module_1.AwsUploadModule),
        ],
        controllers: [reference_controller_1.ReferenceController],
        providers: [reference_service_1.ReferenceService, reference_repository_1.ReferenceRepository],
        exports: [reference_service_1.ReferenceService, reference_repository_1.ReferenceRepository],
    })
], ReferenceModule);
exports.ReferenceModule = ReferenceModule;
//# sourceMappingURL=reference.module.js.map