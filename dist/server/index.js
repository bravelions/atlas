"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const start = async () => {
    const port = process.env.PORT && parseInt(process.env.PORT, 10) || 3001;
    const server = new app_1.default();
    server.listen(port, () => {
        console.log(`> Atlas server ready on http://localhost:${port}`);
    });
};
start().catch((error) => {
    console.log('> Atlas server error', error);
    process.exit(1);
});
