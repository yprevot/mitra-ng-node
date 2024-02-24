import request from 'supertest';
import { ExpressServer } from '../src/ExpressServer';

const API_VERSION_ROUTE = '/api/v1';
describe('Server is running', () => {
    it(`GET ${API_VERSION_ROUTE}`, async () => {
        const response = await request(ExpressServer).get(API_VERSION_ROUTE);
        expect(response.statusCode).toEqual(200);
        expect(response.body).toBeInstanceOf(Object);
        expect(response.body.message).toBe('API Version 1.0');
    });
});
