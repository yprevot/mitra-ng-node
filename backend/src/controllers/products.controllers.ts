import { Request, Response } from 'express';
import { BasicProduct, Product, ProductModel } from '../models/products.models';
import { HttpStatusCode } from '../utils/HttpStatusCode';

class ProductController {
    static async all(request: Request, response: Response): Promise<Response> {
        try {
            const products: Product[] = await ProductModel.all();
            return response.status(HttpStatusCode.OK).json({ products });
        } catch (error) {
            return response
                .status(HttpStatusCode.INTERNAL_SERVER)
                .json({ message: 'something wrong happen' });
        }
    }

    static async getByName(request: Request, response: Response): Promise<Response> {
        try {
            const { name } = request.params;
            const product: Product | undefined = await ProductModel.getByName(name);
            if (product) {
                return response.status(HttpStatusCode.OK).json({ product });
            }
            return response.status(HttpStatusCode.NOT_FOUND).json({ message: 'Product not found' });
        } catch (error) {
            return response
                .status(HttpStatusCode.INTERNAL_SERVER)
                .json({ message: 'something wrong happen' });
        }
    }

    static async create(request: Request, response: Response): Promise<Response> {
        try {
            const product: BasicProduct = request.body;
            const status = await ProductModel.create(product);
            if (!status)
                return response.status(HttpStatusCode.NOT_FOUND).json({ error: 'product exits' });

            return response.status(HttpStatusCode.CREATED).json({
                message: 'Product created',
                product,
            });
        } catch (error) {
            return response
                .status(HttpStatusCode.INTERNAL_SERVER)
                .json({ message: 'something wrong happen' });
        }
    }

    static async update(request: Request, response: Response): Promise<Response> {
        try {
            const id: number = parseInt(request.params.id, 10);
            const productToUpdate: Product = request.body;
            productToUpdate.id = id;
            await ProductModel.update(productToUpdate);
            return response.status(HttpStatusCode.CREATED).json({
                message: `Product ${id} updated`,
                product: productToUpdate,
            });
        } catch (error) {
            return response
                .status(HttpStatusCode.INTERNAL_SERVER)
                .json({ message: 'something wrong happen' });
        }
    }

    static async delete(request: Request, response: Response): Promise<Response> {
        try {
            const id: number = parseInt(request.params.id, 10);
            const status = await ProductModel.delete(id);
            if (!status)
                return response.status(401).json({
                    message: `${id} doesn't exist`,
                });
            return response.status(HttpStatusCode.OK).json({
                message: `Product ${id} deleted`,
            });
        } catch (error) {
            return response
                .status(HttpStatusCode.INTERNAL_SERVER)
                .json({ message: 'something wrong happen' });
        }
    }
}

export { ProductController };
