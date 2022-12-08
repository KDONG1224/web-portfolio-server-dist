"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUploadDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const FileUploadDto = (fileNames) => (target, propertyKey, descriptor) => {
    let properties = {};
    fileNames.forEach((item) => {
        properties = Object.assign(Object.assign({}, properties), { [item]: {
                type: 'string',
                format: 'binary',
            } });
    });
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties,
        },
    })(target, propertyKey, descriptor);
};
exports.FileUploadDto = FileUploadDto;
//# sourceMappingURL=aws-upload.upload.dto.js.map