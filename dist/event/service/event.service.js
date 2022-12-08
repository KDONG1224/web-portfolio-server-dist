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
exports.EventService = void 0;
const common_1 = require("@nestjs/common");
const event_repository_1 = require("../repository/event.repository");
let EventService = class EventService {
    constructor(eventRepository) {
        this.eventRepository = eventRepository;
    }
    async getAll() {
        const getAll = await this.eventRepository.findAll();
        return getAll;
    }
    async enterV2() {
    }
    async playStart(eId, req) {
        const playStart = await this.eventRepository.playStart(eId, req);
        return playStart;
    }
    async playEnd(data) {
        const playEnd = await this.eventRepository.palyEnd(data);
        return playEnd;
    }
    async myRanking(eId, userToken, req) {
        const myRanking = await this.eventRepository.myRanking(eId, userToken, req);
        return myRanking;
    }
    async ranking(eId, rank) {
        const ranking = await this.eventRepository.ranking(eId, rank);
        return ranking;
    }
    async profile(eId, userToken, req) {
        const profile = await this.eventRepository.profile(eId, userToken, req);
        return profile;
    }
    async buy(data, req) {
        const buy = await this.eventRepository.buy(data, req);
        return buy;
    }
    async select(data, req) {
        const select = await this.eventRepository.select(data, req);
        return select;
    }
    async result(eId) {
        const result = await this.eventRepository.result(eId);
        return result;
    }
    async totalRanking(eId) {
        const totalRanking = await this.eventRepository.totalRanking(eId);
        return totalRanking;
    }
    async highRanking(eId) {
        const highRanking = await this.eventRepository.highRanking(eId);
        return highRanking;
    }
};
EventService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [event_repository_1.EventRepository])
], EventService);
exports.EventService = EventService;
//# sourceMappingURL=event.service.js.map