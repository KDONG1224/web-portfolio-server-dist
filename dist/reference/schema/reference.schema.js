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
exports.ReferenceSchema = exports.Reference = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const reference_model_1 = require("../models/reference.model");
const options = {
    timestamps: true,
    versionKey: false,
};
let Reference = class Reference extends mongoose_2.Document {
};
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '<a>',
        description: '태그 이름',
        required: true,
    }),
    (0, mongoose_1.Prop)({
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Reference.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '태그타입',
        description: 'type',
        required: true,
    }),
    (0, mongoose_1.Prop)({
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Reference.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '태그사용법',
        description: 'tag',
        required: true,
    }),
    (0, mongoose_1.Prop)({
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Reference.prototype, "tag", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '사용성',
        description: 'use',
        required: true,
    }),
    (0, mongoose_1.Prop)({
        required: true,
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], Reference.prototype, "use", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '정의',
        description: 'definition',
        required: true,
    }),
    (0, mongoose_1.Prop)({
        required: true,
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    (0, class_validator_1.ArrayMinSize)(1),
    __metadata("design:type", Array)
], Reference.prototype, "definition", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '구조',
        description: 'element',
        required: true,
    }),
    (0, mongoose_1.Prop)({
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Reference.prototype, "element", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '레퍼런스',
        description: 'reference',
        required: true,
    }),
    (0, mongoose_1.Prop)({
        required: true,
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_transformer_1.Type)(() => reference_model_1.ReferenceModel),
    __metadata("design:type", Array)
], Reference.prototype, "reference", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '요약설명',
        description: 'summary',
        required: true,
    }),
    (0, mongoose_1.Prop)({
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Reference.prototype, "summary", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '한줄설명',
        description: 'description',
        required: true,
    }),
    (0, mongoose_1.Prop)({
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Reference.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '접근성',
        description: 'accessibility',
    }),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], Reference.prototype, "accessibility", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '브라우저 호환성',
        description: 'compatibility',
        required: true,
    }),
    (0, mongoose_1.Prop)({
        required: true,
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_transformer_1.Type)(() => reference_model_1.CompatibilityModel),
    __metadata("design:type", Array)
], Reference.prototype, "compatibility", void 0);
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
], Reference.prototype, "thumbmnaile", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Number)
], Reference.prototype, "index", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Reference.prototype, "status", void 0);
Reference = __decorate([
    (0, mongoose_1.Schema)(options)
], Reference);
exports.Reference = Reference;
const _ReferenceSchema = mongoose_1.SchemaFactory.createForClass(Reference);
_ReferenceSchema.virtual('readOnlyData').get(function () {
    return {
        title: this.title,
        type: this.type,
        tag: this.tag,
        use: this.use,
        definition: this.definition,
        element: this.element,
        summary: this.summary,
        description: this.description,
        accessibility: this.accessibility,
        thumbmnaile: this.thumbmnaile,
        reference: this.reference,
        compatibility: this.compatibility,
        status: this.status,
        index: this.index,
        id: this.id,
    };
});
_ReferenceSchema.set('toObject', { virtuals: true });
_ReferenceSchema.set('toJSON', { virtuals: true });
exports.ReferenceSchema = _ReferenceSchema;
//# sourceMappingURL=reference.schema.js.map