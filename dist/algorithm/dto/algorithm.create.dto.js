"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlgorithmCreateDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const algorithm_schema_1 = require("../schema/algorithm.schema");
class AlgorithmCreateDto extends (0, swagger_1.PickType)(algorithm_schema_1.Algorithm, [
    'title',
    'question',
    'inputDesc',
    'outputDesc',
    'inputEx',
    'outputEx',
]) {
}
exports.AlgorithmCreateDto = AlgorithmCreateDto;
//# sourceMappingURL=algorithm.create.dto.js.map