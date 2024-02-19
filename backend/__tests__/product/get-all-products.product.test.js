"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const ExpressServer_1 = require("../../src/ExpressServer");
describe('Listing all products', () => {
    it('Empty results', async () => {
        const result = await (0, supertest_1.default)(ExpressServer_1.ExpressServer.getServer()).get('/api/v1/products');
        expect(result.statusCode).toEqual(200);
    });
    it('Result with data', async () => {
        const result = await (0, supertest_1.default)(ExpressServer_1.ExpressServer.getServer()).get('/api/v1/products');
        expect(result.statusCode).toEqual(200);
    });
});
