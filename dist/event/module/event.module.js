"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventModule = void 0;
const common_1 = require("@nestjs/common");
const event_service_1 = require("../service/event.service");
const event_controller_1 = require("../controller/event.controller");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const event_schema_1 = require("../schema/event.schema");
const event_repository_1 = require("../repository/event.repository");
const toy_projects_module_1 = require("../../toy-projects/module/toy-projects.module");
let EventModule = class EventModule {
};
EventModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            mongoose_1.MongooseModule.forFeature([{ name: event_schema_1.Events.name, schema: event_schema_1.EventsSchema }]),
            (0, common_1.forwardRef)(() => toy_projects_module_1.ToyProjectsModule),
        ],
        controllers: [event_controller_1.EventController],
        providers: [event_service_1.EventService, event_repository_1.EventRepository],
        exports: [event_service_1.EventService, event_repository_1.EventRepository],
    })
], EventModule);
exports.EventModule = EventModule;
//# sourceMappingURL=event.module.js.map