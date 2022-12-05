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
exports.ReferenceRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const aws_upload_service_1 = require("../../aws-upload/service/aws-upload.service");
const reference_schema_1 = require("../schema/reference.schema");
let ReferenceRepository = class ReferenceRepository {
    constructor(referenceModel, awsUploadService) {
        this.referenceModel = referenceModel;
        this.awsUploadService = awsUploadService;
    }
    async findAll() {
        const result = await this.referenceModel.find();
        return result;
    }
    async create(createReferenceData, files) {
        if (!files['thumbmnaile']) {
            throw new common_1.HttpException({
                statusCode: common_1.HttpStatus.BAD_REQUEST,
                message: '썸네일이 존재하지 않습니다.',
            }, common_1.HttpStatus.BAD_REQUEST);
        }
        try {
            const { compatibility, reference } = createReferenceData;
            const findAll = await this.referenceModel.find();
            const find = findAll.length > 0 && findAll[findAll.length - 1];
            const fileUpload = await this.awsUploadService.uploadFileToS3('reference', files['thumbmnaile'][0]);
            const fileUrl = this.awsUploadService.getAwsS3FileUrl(fileUpload.key);
            const result = await this.referenceModel.create(Object.assign(Object.assign({ index: find ? find.index + 1 : 1, status: 'active' }, createReferenceData), { compatibility: JSON.parse(compatibility), reference: JSON.parse(reference), thumbmnaile: fileUrl }));
            return result;
        }
        catch (error) {
            console.error(error);
        }
    }
    async find(filter) {
        const result = await this.referenceModel.find(filter);
        const res = result.map(({ readOnlyData }) => (Object.assign({}, readOnlyData)));
        return res;
    }
    async update(id, files, datas) {
        try {
            let thumbUrl = '';
            if (Object.keys(files).length !== 0) {
                const fileUpload = await this.awsUploadService.uploadFileToS3('reference', files['thumbmnaile'][0]);
                const fileUrl = this.awsUploadService.getAwsS3FileUrl(fileUpload.key);
                thumbUrl = fileUrl;
            }
            else {
                thumbUrl = datas.thumbmnaile;
            }
            const reference = await this.referenceModel.findByIdAndUpdate(id, Object.assign(Object.assign({}, datas), { compatibility: JSON.parse(datas.compatibility), reference: JSON.parse(datas.reference), thumbmnaile: thumbUrl }));
            const find = await this.referenceModel.findById(reference.id);
            return find;
        }
        catch (error) {
            console.error(error);
        }
    }
};
ReferenceRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(reference_schema_1.Reference.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        aws_upload_service_1.AwsUploadService])
], ReferenceRepository);
exports.ReferenceRepository = ReferenceRepository;
//# sourceMappingURL=reference.repository.js.map