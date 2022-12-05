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
exports.GuestbookRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const aws_upload_service_1 = require("../../aws-upload/service/aws-upload.service");
const guestbook_schema_1 = require("../schema/guestbook.schema");
let GuestbookRepository = class GuestbookRepository {
    constructor(guestbookModel, awsUploadService) {
        this.guestbookModel = guestbookModel;
        this.awsUploadService = awsUploadService;
    }
    async findAll() {
        const result = await this.guestbookModel.find();
        return result;
    }
    async create(guestbookData, files) {
        if (!files['images']) {
            throw new common_1.HttpException({
                statusCode: common_1.HttpStatus.BAD_REQUEST,
                message: '이미지가 존재하지 않습니다.',
            }, common_1.HttpStatus.BAD_REQUEST);
        }
        try {
            const fileUpload = await this.awsUploadService.uploadFileToS3('guestbook', files['images'][0]);
            const fileUrl = this.awsUploadService.getAwsS3FileUrl(fileUpload.key);
            const result = await this.guestbookModel.create(Object.assign(Object.assign({ status: 'active' }, guestbookData), { images: fileUrl }));
            return result;
        }
        catch (error) {
            console.error(error);
        }
    }
};
GuestbookRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(guestbook_schema_1.Guestbook.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        aws_upload_service_1.AwsUploadService])
], GuestbookRepository);
exports.GuestbookRepository = GuestbookRepository;
//# sourceMappingURL=guestbook.repository.js.map