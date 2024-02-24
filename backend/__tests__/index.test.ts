import request from 'supertest';
import { ExpressServer } from '../src/ExpressServer';

const INDEX_ROUTE = '/';
describe('Server is running', () => {
    it(`GET ${INDEX_ROUTE}`, async () => {
        const response = await request(ExpressServer).get(INDEX_ROUTE);
        expect(response.status).toBe(200);
    });
});
