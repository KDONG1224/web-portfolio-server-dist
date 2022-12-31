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
exports.EventsSchema = exports.Events = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const class_validator_1 = require("class-validator");
const mongoose_2 = require("mongoose");
const options = {
    timestamps: true,
    versionKey: false,
};
let Events = class Events extends mongoose_2.Document {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Events.prototype, "eId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Events.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Events.prototype, "phone", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Events.prototype, "memberNo", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Events.prototype, "state", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], Events.prototype, "day", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], Events.prototype, "score", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], Events.prototype, "highScore", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], Events.prototype, "totalScore", void 0);
Events = __decorate([
    (0, mongoose_1.Schema)(options)
], Events);
exports.Events = Events;
const _EventsSchema = mongoose_1.SchemaFactory.createForClass(Events);
_EventsSchema.virtual('readOnlyData').get(function () {
    return {
        eId: this.eId,
        name: this.name,
        phone: this.phone,
        memberNo: this.memberNo,
        state: this.state,
        day: this.day,
        score: this.score,
        highScore: this.highScore,
        totalScore: this.totalScore,
    };
});
_EventsSchema.set('toObject', { virtuals: true });
_EventsSchema.set('toJSON', { virtuals: true });
exports.EventsSchema = _EventsSchema;
//# sourceMappingURL=event.schema.js.map