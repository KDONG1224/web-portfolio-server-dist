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
exports.GuestbookSchema = exports.Guestbook = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const mongoose_2 = require("mongoose");
const options = {
    timestamps: true,
    versionKey: false,
};
let Guestbook = class Guestbook extends mongoose_2.Document {
};
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'KDONG',
        description: 'name',
        required: true,
    }),
    (0, mongoose_1.Prop)({
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Guestbook.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'gkfl8809@naver.com',
        description: 'email',
        required: true,
    }),
    (0, mongoose_1.Prop)({
        required: true,
    }),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Guestbook.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '안녕하세요!',
        description: 'content',
        required: true,
    }),
    (0, mongoose_1.Prop)({
        required: true,
    }),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Guestbook.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '이미지',
        description: 'images',
        required: false,
    }),
    (0, mongoose_1.Prop)({
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Guestbook.prototype, "images", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Guestbook.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false,
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], Guestbook.prototype, "index", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false,
    }),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], Guestbook.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false,
    }),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], Guestbook.prototype, "updatedAt", void 0);
Guestbook = __decorate([
    (0, mongoose_1.Schema)(options)
], Guestbook);
exports.Guestbook = Guestbook;
const _GuestbookSchema = mongoose_1.SchemaFactory.createForClass(Guestbook);
_GuestbookSchema.virtual('readOnlyData').get(function () {
    return {
        name: this.name,
        content: this.content,
        email: this.email,
        images: this.images,
        status: this.status,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt,
        index: this.index,
        id: this.id,
    };
});
_GuestbookSchema.set('toObject', { virtuals: true });
_GuestbookSchema.set('toJSON', { virtuals: true });
exports.GuestbookSchema = _GuestbookSchema;
//# sourceMappingURL=guestbook.schema.js.map