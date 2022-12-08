"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferenceCreateDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const reference_schema_1 = require("../schema/reference.schema");
class ReferenceCreateDto extends (0, swagger_1.PickType)(reference_schema_1.Reference, [
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
    'thumbmnaile',
]) {
}
exports.ReferenceCreateDto = ReferenceCreateDto;
//# sourceMappingURL=reference.create.dto.js.map