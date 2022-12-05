"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuestbookModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const aws_upload_module_1 = require("../../aws-upload/module/aws-upload.module");
const guestbook_controller_1 = require("../controller/guestbook.controller");
const guestbook_repository_1 = require("../repository/guestbook.repository");
const guestbook_schema_1 = require("../schema/guestbook.schema");
const guestbook_service_1 = require("../service/guestbook.service");
let GuestbookModule = class GuestbookModule {
};
GuestbookModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            mongoose_1.MongooseModule.forFeature([
                { name: guestbook_schema_1.Guestbook.name, schema: guestbook_schema_1.GuestbookSchema },
            ]),
            (0, common_1.forwardRef)(() => aws_upload_module_1.AwsUploadModule),
        ],
        controllers: [guestbook_controller_1.GuestbookController],
        providers: [guestbook_service_1.GuestbookService, guestbook_repository_1.GuestbookRepository],
        exports: [guestbook_service_1.GuestbookService, guestbook_repository_1.GuestbookRepository],
    })
], GuestbookModule);
exports.GuestbookModule = GuestbookModule;
//# sourceMappingURL=guestbook.module.js.map