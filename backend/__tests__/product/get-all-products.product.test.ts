import { Request, Response } from 'supertest'
import request from 'supertest'
import { ExpressServer } from '../../src/ExpressServer'

describe('Listing all products', () => {
    it('Empty results', async () => {
        const result = await request(ExpressServer.getServer()).get('/api/v1/products')
        expect(result.statusCode).toEqual(200)
    })
    it('Result with data', async () => {
        const result = await request(ExpressServer.getServer()).get('/api/v1/products')
        expect(result.statusCode).toEqual(200)
    })
})
