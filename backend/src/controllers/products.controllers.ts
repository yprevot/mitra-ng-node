import { Request, Response } from 'express';
import {
    BasicProduct,
    Product,
    ProductModel,
} from '../models/products.models';

class ProductController{

    static all( request: Request, response: Response) : Response{
        const products: Product[] = ProductModel.all();   
        return response.status(200).json({products});
    }

    static getByName(request: Request, response: Response): Response {
        const name: string = request.params.name;
        const product: Product | undefined = ProductModel.getByName(name);
        if(product){
            return response.status(200).json({product});
        }else{
            return response.status(404).json({message: 'Product not found'});
        }
    }

    static  create(request: Request, response: Response): Response{
        const product: BasicProduct =  request.body;
        const status = ProductModel.create(product);
        if(!status)
            return response.status(404).json({error: 'product exits'});

        return response.status(201).json({
            message: 'Product created',
            product
        });
    }

    static update(request: Request, response: Response ): Response {
        const id: number = parseInt(request.params.id,10);
        const productToUpdate: Product = request.body;
        productToUpdate.id =  id;
        ProductModel.update(productToUpdate);
        return response.status(200).json({
            message: `Product ${id} updated`,
            product: productToUpdate
        })
    }

    static delete(request: Request, response: Response): Response{
        const id: number  = parseInt(request.params.id,10);
        const status = ProductModel.delete(id);
        if(!status)
            return response.status(401).json({
                message: `${id} doesn't exist`
            });
        return response.status(200).json({
            message: `Product ${id} deleted`
        });
    }
};

export {
    ProductController,
};



