import { Router, Request, Response } from 'express';
import { ProductController } from '../controllers/products.controllers';

import {
    createProductValidatorMiddleware,
    updateProductValidatorMiddleware,
} from '../utils/validators/product.validator';

const productsRouter = Router();

productsRouter.get('/', ProductController.all);
productsRouter.get('/:name', ProductController.getByName);
productsRouter.post('/', createProductValidatorMiddleware, ProductController.create);
productsRouter.put('/:id', updateProductValidatorMiddleware, ProductController.update);
productsRouter.delete('/:id', ProductController.delete);
export default productsRouter;
