"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsSchema = exports.Events = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const options = {
    timestamps: true,
    versionKey: false,
};
let Events = class Events extends mongoose_2.Document {
};
Events = __decorate([
    (0, mongoose_1.Schema)(options)
], Events);
exports.Events = Events;
const _EventsSchema = mongoose_1.SchemaFactory.createForClass(Events);
_EventsSchema.virtual('readOnlyData').get(function () {
    return {};
});
_EventsSchema.set('toObject', { virtuals: true });
_EventsSchema.set('toJSON', { virtuals: true });
exports.EventsSchema = _EventsSchema;
//# sourceMappingURL=event.schema.js.map