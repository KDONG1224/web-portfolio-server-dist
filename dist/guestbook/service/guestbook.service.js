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
exports.GuestbookService = void 0;
const common_1 = require("@nestjs/common");
const guestbook_repository_1 = require("../repository/guestbook.repository");
let GuestbookService = class GuestbookService {
    constructor(guestbookRepository) {
        this.guestbookRepository = guestbookRepository;
    }
    async getAllGuestbook() {
        const allGuestbook = await this.guestbookRepository.findAll();
        return allGuestbook;
    }
    async createGuestbook(guestbookData, files) {
        const create = await this.guestbookRepository.create(guestbookData, files);
        console.log('create : ', create);
        return create.readOnlyData;
    }
};
GuestbookService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [guestbook_repository_1.GuestbookRepository])
], GuestbookService);
exports.GuestbookService = GuestbookService;
//# sourceMappingURL=guestbook.service.js.map