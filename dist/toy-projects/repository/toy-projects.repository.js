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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToyProjectsRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const moment_1 = __importDefault(require("moment"));
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
    async checkEvent(eId) {
        const eventInfo = await this.toyProjectModel.findById(eId);
        try {
            if (!eventInfo) {
                throw new common_1.HttpException({
                    statusCode: common_1.HttpStatus.BAD_REQUEST,
                    message: '이벤트 id가 존재하지 않습니다.',
                }, common_1.HttpStatus.BAD_REQUEST);
            }
            const { period, eventPeriod } = eventInfo;
            const startDay = period[0];
            const eventStart = (0, moment_1.default)(startDay).format('YYYY-MM-DD HH:mm:ss');
            const eventEnd = (0, moment_1.default)(startDay)
                .add(eventPeriod, 'day')
                .format('YYYY-MM-DD HH:mm:ss');
            const endTime = (0, moment_1.default)(eventEnd).endOf('day');
            const today = (0, moment_1.default)();
            return {
                eventStart,
                eventEnd,
                active: today.isBetween(eventStart, endTime),
                result: eventInfo,
            };
        }
        catch (error) {
            console.log(error);
        }
        return eventInfo;
    }
    async find(filter) {
        console.log('filter : ', filter);
        return [];
    }
    async findById(id) {
        const result = await this.toyProjectModel.findById(id);
        return result;
    }
    async findEid(gameName) {
        const result = await this.toyProjectModel.findOne({
            gameName,
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