import { Router, Request, Response } from 'express';

import { productsRouter } from './products.routes';
import { HttpStatusCode } from '../utils/HttpStatusCode';

const router = Router();
router.get('/', (request: Request, response: Response) => {
    response.status(HttpStatusCode.OK).json({
        message: 'API Version 1.0',
    });
});
router.use('/products', productsRouter);

export { router };
