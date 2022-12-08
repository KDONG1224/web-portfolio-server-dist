"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferenceRequestDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const reference_schema_1 = require("../schema/reference.schema");
class ReferenceRequestDto extends (0, swagger_1.PickType)(reference_schema_1.Reference, [
    'title',
    'type',
    'tag',
    'use',
    'definition',
    'element',
    'reference',
    'summary',
    'description',
    'accessibility',
    'compatibility',
]) {
}
exports.ReferenceRequestDto = ReferenceRequestDto;
//# sourceMappingURL=reference.request.dto.js.map