"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
const app_service_1 = require("./app.service");
const app_controller_1 = require("./app.controller");
const logger_middleware_1 = require("./common/middleware/logger.middleware");
const algorithm_module_1 = require("./algorithm/module/algorithm.module");
const reference_module_1 = require("./reference/module/reference.module");
const toy_projects_module_1 = require("./toy-projects/module/toy-projects.module");
const aws_upload_module_1 = require("./aws-upload/module/aws-upload.module");
const guestbook_module_1 = require("./guestbook/modules/guestbook.module");
const event_module_1 = require("./event/module/event.module");
let AppModule = class AppModule {
    constructor() {
        this.isDev = process.env.MODE === 'dev' ? true : false;
    }
    configure(consumer) {
        consumer.apply(logger_middleware_1.LoggerMiddleware).forRoutes('*');
        mongoose_2.default.set('debug', this.isDev);
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            mongoose_1.MongooseModule.forRoot(process.env.MONGODB_URI),
            algorithm_module_1.AlgorithmModule,
            reference_module_1.ReferenceModule,
            toy_projects_module_1.ToyProjectsModule,
            aws_upload_module_1.AwsUploadModule,
            guestbook_module_1.GuestbookModule,
            event_module_1.EventModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map