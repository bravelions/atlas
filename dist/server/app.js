"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const koa_compress_1 = __importDefault(require("koa-compress"));
const koa_range_1 = __importDefault(require("koa-range"));
const post_1 = __importDefault(require("./router/v1/test/post"));
class AtlasApp extends koa_1.default {
    constructor() {
        super();
        this.use(koa_range_1.default);
        this.use(koa_compress_1.default({
            filter: (contentType) => /text|json|javascript|xml/i.test(contentType),
            threshold: 2048,
            br: false,
        }));
        this.use(post_1.default.middleware());
    }
}
exports.default = AtlasApp;
