import { Request, Response } from "supertest";
import request from 'supertest';
import { ExpressServer } from "../src/ExpressServer";

describe('Server test', ()=>{    
   it('Server is working', async () => {
            const result = await request(ExpressServer.getServer()).get('/api/v1/products');
            console.log(result);
            expect(result.statusCode).toEqual(200);
    });
});