import request from 'supertest';
import { GeneratorProducts } from '../utils/generator-products';
import { ExpressServer } from '../../src/ExpressServer';

describe('Listing all products', () => {
    it('Empty results', async () => {
        const result = await request(ExpressServer).get('/api/v1/products');
        const product = new GeneratorProducts();
        const list = await product.generateProductList();
        console.table(list);
        expect(result.statusCode).toEqual(200);
    });

    it('Result with data', async () => {
        const result = await request(ExpressServer).get('/api/v1/products');
        expect(result.statusCode).toEqual(200);
    });
});
