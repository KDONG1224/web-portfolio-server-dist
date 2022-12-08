"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const express_basic_auth_1 = __importDefault(require("express-basic-auth"));
const app_module_1 = require("./app.module");
const http_exception_filter_1 = require("./common/exceptions/http-exception.filter");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const isDev = process.env.MODE === 'dev' ? true : false;
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter());
    app.enableCors({
        origin: (origin, callback) => {
            if (origin) {
                const whiteList = process.env.REQUEST_URL_WHITE_LIST.split(',');
                if (whiteList.indexOf(origin) !== -1) {
                    callback(null, true);
                }
                else {
                    callback(new common_1.HttpException('Not Allowed By CORS', 400));
                }
            }
            else {
                callback(null, true);
            }
        },
        methods: 'GET, HEAD, PUT, PATCH, POST, DELETE, OPTIONS',
        credentials: true,
    });
    if (!isDev) {
        app.use(['/api'], (0, express_basic_auth_1.default)({
            challenge: true,
            users: {
                [process.env.SWAGGER_USER]: process.env.SWAGGER_PASSWORD,
            },
        }));
    }
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Kdong Server')
        .setDescription('Kdong Portfolio Server description')
        .setVersion('1.0.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    app.enableCors({
        origin: true,
        credentials: true,
    });
    const PORT = process.env.PORT;
    await app.listen(PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map