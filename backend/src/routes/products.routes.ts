import { Router, Request, Response } from 'express';
import { 
    getAllProductsController,
    getProductByNameController,
    createProductController,
    updateProductController,
    deleteProductController
} from '../controllers/products.controllers';

import {
    createProductValidatorMiddleware,
    updateProductValidatorMiddleware
} from '../utils/validators/product.validator';

const productsRouter =  Router();

productsRouter.get('/', getAllProductsController);
productsRouter.get('/:name', getProductByNameController);
productsRouter.post('/',createProductValidatorMiddleware, createProductController);
productsRouter.put('/:id', updateProductValidatorMiddleware, updateProductController);
productsRouter.delete('/:id',deleteProductController);
export default productsRouter;