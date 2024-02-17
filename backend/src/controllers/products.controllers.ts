import { Request, Response } from 'express';
import {
    BasicProduct,
    Product,
    getAllProducts,
    getProductByName,
    createProduct,
    updateProduct,
    deleteProduct
} from '../models/products.models';

export const getAllProductsController = ( _: Request, response: Response) : void => {
    const products: Product[] = getAllProducts();   
    response.status(200).json({products});
}

export const getProductByNameController = (request: Request, response: Response): void => {
    const name: string = request.params.name;
    const product: Product | undefined = getProductByName(name);
    if(product){
        response.status(200).json({product});
    }else{
        response.status(404).json({message: 'Product not found'});
    }
}

export const createProductController = (request: Request, response: Response): Response => {
    const product: BasicProduct =  request.body;
    const status = createProduct(product);
    if(!status)
        return response.status(404).json({error: 'product exits'});

    return response.status(201).json({
        message: 'Product created',
        product
    });
}

export const updateProductController = (request: Request, response: Response ): void => {
    const id: number = parseInt(request.params.id,10);
    const productToUpdate: Product = request.body;
    productToUpdate.id =  id;
    updateProduct(productToUpdate);
    response.status(200).json({
        message: `Product ${id} updated`,
        product: productToUpdate
    })
}

export  const deleteProductController =  (request: Request, response: Response): Response => {
    const id: number  = parseInt(request.params.id,10);
    const status = deleteProduct(id);
    if(!status)
        return response.status(401).json({
            message: `${id} doesn't exist`
        });
    return response.status(200).json({
        message: `Product ${id} deleted`
    });
}
