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
exports.AlgorithmSchema = exports.Algorithm = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const options = {
    timestamps: true,
    versionKey: false,
};
let Algorithm = class Algorithm extends mongoose_2.Document {
};
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '최솟값 구하기!',
        description: '알고리즘 제목',
        required: true,
    }),
    (0, mongoose_1.Prop)({
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Algorithm.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '문제 질문',
        description: 'question',
        required: true,
    }),
    (0, mongoose_1.Prop)({
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Algorithm.prototype, "question", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '문제 힌트',
        description: 'hint',
        required: true,
    }),
    (0, mongoose_1.Prop)({
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Algorithm.prototype, "hint", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '난이도',
        description: 'level',
        required: true,
    }),
    (0, mongoose_1.Prop)({
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Algorithm.prototype, "level", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '타입',
        description: 'type',
        required: true,
    }),
    (0, mongoose_1.Prop)({
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Algorithm.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '나의 풀이 해석',
        description: 'grassMyDesc',
        required: true,
    }),
    (0, mongoose_1.Prop)({
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Algorithm.prototype, "grassMyDesc", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '다른 풀이 해석',
        description: 'grassDifferDesc',
        required: true,
    }),
    (0, mongoose_1.Prop)({
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Algorithm.prototype, "grassDifferDesc", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '나의 풀이',
        description: 'grassMyCode',
        required: true,
    }),
    (0, mongoose_1.Prop)({
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Algorithm.prototype, "grassMyCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '다른 풀이',
        description: 'grassDifferCode',
        required: true,
    }),
    (0, mongoose_1.Prop)({
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Algorithm.prototype, "grassDifferCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '썸네일',
        description: 'thumbmnaile',
        required: false,
    }),
    (0, mongoose_1.Prop)({
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Algorithm.prototype, "thumbmnaile", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Number)
], Algorithm.prototype, "index", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Algorithm.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false,
    }),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], Algorithm.prototype, "createdAt", void 0);
Algorithm = __decorate([
    (0, mongoose_1.Schema)(options)
], Algorithm);
exports.Algorithm = Algorithm;
const _AlgorithmSchema = mongoose_1.SchemaFactory.createForClass(Algorithm);
_AlgorithmSchema.virtual('readOnlyData').get(function () {
    return {
        title: this.title,
        question: this.question,
        hint: this.hint,
        type: this.type,
        level: this.level,
        grassMyDesc: this.grassMyDesc,
        grassDifferDesc: this.grassDifferDesc,
        grassMyCode: this.grassMyCode,
        grassDifferCode: this.grassDifferCode,
        thumbmnaile: this.thumbmnaile,
        status: this.status,
        index: this.index,
        createdAt: this.createdAt,
        id: this.id,
    };
});
_AlgorithmSchema.set('toObject', { virtuals: true });
_AlgorithmSchema.set('toJSON', { virtuals: true });
exports.AlgorithmSchema = _AlgorithmSchema;
//# sourceMappingURL=algorithm.schema.js.map