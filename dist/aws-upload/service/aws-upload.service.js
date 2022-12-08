"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwsUploadService = void 0;
const path = __importStar(require("path"));
const AWS = __importStar(require("aws-sdk"));
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
let AwsUploadService = class AwsUploadService {
    constructor(configService) {
        this.configService = configService;
        this.awsS3 = new AWS.S3({
            accessKeyId: process.env.AWS_ACCESS_KEY,
            secretAccessKey: process.env.AWS_SECRET_KEY,
            region: process.env.AWS_REGION,
        });
        this.S3_BUCKET_NAME = process.env.AWS_BUCKET_NAME;
    }
    async uploadFileToS3(folder, file) {
        try {
            const key = `${folder}/${Date.now()}_${path.basename(file.originalname)}`.replace(/ /g, '');
            const s3Object = await this.awsS3
                .putObject({
                Bucket: this.S3_BUCKET_NAME,
                Key: key,
                Body: file.buffer,
                ACL: 'public-read',
                ContentType: file.mimetype,
            })
                .promise();
            return { key, s3Object, contentType: file.mimetype };
        }
        catch (error) {
            throw new common_1.BadRequestException(`File upload failed : ${error}`);
        }
    }
    async deleteS3Object(key, callback) {
        try {
            await this.awsS3
                .deleteObject({
                Bucket: this.S3_BUCKET_NAME,
                Key: key,
            }, callback)
                .promise();
            return { success: true };
        }
        catch (error) {
            throw new common_1.BadRequestException(`Failed to delete file : ${error}`);
        }
    }
    getAwsS3FileUrl(objectKey) {
        return `https://${this.S3_BUCKET_NAME}.s3.amazonaws.com/${objectKey}`;
    }
};
AwsUploadService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], AwsUploadService);
exports.AwsUploadService = AwsUploadService;
//# sourceMappingURL=aws-upload.service.js.map