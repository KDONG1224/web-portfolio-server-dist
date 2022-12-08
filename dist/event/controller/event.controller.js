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
exports.EventController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const event_service_1 = require("../service/event.service");
let EventController = class EventController {
    constructor(eventService) {
        this.eventService = eventService;
    }
    async getAllEvent() {
        return await this.eventService.getAll();
    }
    async enterV2() {
        return await this.eventService.enterV2();
    }
    async playStart(eId, req) {
        return await this.eventService.playStart(eId, req);
    }
    async playEnd(eId, score, coin, userToken, defaultScore, req) {
        console.log(eId, score, coin, userToken, defaultScore, req);
        const data = {
            eId,
            score,
            coin,
            userToken,
            defaultScore,
            req,
        };
        return await this.eventService.playEnd(data);
    }
    async myRanking(eId, userToken, req) {
        console.log(eId, userToken, req);
        return await this.eventService.myRanking(eId, userToken, req);
    }
    async ranking(eId, rank) {
        console.log(eId, rank);
        return await this.eventService.ranking(eId, rank);
    }
    async profile(eId, userToken, req) {
        console.log(eId, userToken, req);
        return await this.eventService.profile(eId, userToken, req);
    }
    async buy(eId, char, userToken, req) {
        console.log(eId, char, userToken);
        const data = {
            eId,
            char,
            userToken,
        };
        return await this.eventService.buy(data, req);
    }
    async select(eId, char, userToken, req) {
        console.log(eId, char, userToken);
        const data = { eId, char, userToken };
        return await this.eventService.select(data, req);
    }
    async result(eId) {
        console.log(eId);
        return await this.eventService.result(eId);
    }
    async totalRanking(eId) {
        console.log(eId);
        return await this.eventService.totalRanking(eId);
    }
    async highRanking(eId) {
        console.log(eId);
        return await this.eventService.highRanking(eId);
    }
};
__decorate([
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EventController.prototype, "getAllEvent", null);
__decorate([
    (0, common_1.Get)('enterV2'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EventController.prototype, "enterV2", null);
__decorate([
    (0, common_1.Post)('/playStart'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], EventController.prototype, "playStart", null);
__decorate([
    (0, common_1.Post)('/playEnd'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, String, Object, Object]),
    __metadata("design:returntype", Promise)
], EventController.prototype, "playEnd", null);
__decorate([
    (0, common_1.Get)('/myRanking'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], EventController.prototype, "myRanking", null);
__decorate([
    (0, common_1.Get)('/ranking'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], EventController.prototype, "ranking", null);
__decorate([
    (0, common_1.Get)('/profile'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], EventController.prototype, "profile", null);
__decorate([
    (0, common_1.Post)('/buy'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], EventController.prototype, "buy", null);
__decorate([
    (0, common_1.Post)('/select'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], EventController.prototype, "select", null);
__decorate([
    (0, common_1.Post)('/result'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EventController.prototype, "result", null);
__decorate([
    (0, common_1.Get)('/totalRanking'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EventController.prototype, "totalRanking", null);
__decorate([
    (0, common_1.Get)('/highRanking'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EventController.prototype, "highRanking", null);
EventController = __decorate([
    (0, swagger_1.ApiTags)('Event'),
    (0, swagger_1.ApiExcludeController)(),
    (0, common_1.Controller)('event'),
    __metadata("design:paramtypes", [event_service_1.EventService])
], EventController);
exports.EventController = EventController;
//# sourceMappingURL=event.controller.js.map