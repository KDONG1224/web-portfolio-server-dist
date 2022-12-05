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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuestbookController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const aws_upload_upload_dto_1 = require("../../aws-upload/dto/aws-upload.upload.dto");
const guestbook_service_1 = require("../service/guestbook.service");
let GuestbookController = class GuestbookController {
    constructor(guestbookService) {
        this.guestbookService = guestbookService;
    }
    getAllGuestbook() {
        return this.guestbookService.getAllGuestbook();
    }
    getGuestbook(filter) {
        console.log(filter);
    }
    createReference(files, guestbookData) {
        console.log('A : ', guestbookData);
        console.log('A : ', files);
        return this.guestbookService.createGuestbook(guestbookData, files);
    }
};
__decorate([
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GuestbookController.prototype, "getAllGuestbook", null);
__decorate([
    (0, common_1.Get)('/:filter'),
    __param(0, (0, common_1.Param)('filter')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GuestbookController.prototype, "getGuestbook", null);
__decorate([
    (0, common_1.Post)('create'),
    (0, swagger_1.ApiConsumes)('/form-data'),
    (0, aws_upload_upload_dto_1.FileUploadDto)(['images']),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([{ name: 'images', maxCount: 1 }])),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object]),
    __metadata("design:returntype", void 0)
], GuestbookController.prototype, "createReference", null);
GuestbookController = __decorate([
    (0, swagger_1.ApiTags)('Guestbook'),
    (0, common_1.Controller)('guestbook'),
    __metadata("design:paramtypes", [guestbook_service_1.GuestbookService])
], GuestbookController);
exports.GuestbookController = GuestbookController;
//# sourceMappingURL=guestbook.controller.js.map