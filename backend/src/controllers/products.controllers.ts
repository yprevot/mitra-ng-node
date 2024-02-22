import { Request, Response } from 'express';
import { ProductService } from '../services/product.service';
import { IRGetByName } from '../interfaces/all.interfaces';
import { BasicProduct, Product } from '../data-source/products.data-source';
import { HttpStatusCode } from '../utils/HttpStatusCode';

const productService = new ProductService();
class ProductController {
    static async all(request: Request, response: Response): Promise<Response> {
        try {
            const list: Product[] = await productService.getAll();
            return response.status(HttpStatusCode.OK).json({ product: list });
        } catch (error) {
            return response
                .status(HttpStatusCode.INTERNAL_SERVER)
                .json({ message: 'somethin wrong happen' });
        }
    }

    static async getByName(request: Request<IRGetByName>, response: Response): Promise<Response> {
        try {
            const { name } = request.params;
            const product: Product | undefined = await productService.getProductByName(name);
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
            const product: BasicProduct = request.body as BasicProduct;
            const status = await productService.createProduct(product);
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
            const status = await productService.updateProduct(productToUpdate);
            if (!status)
                return response
                    .status(HttpStatusCode.NOT_FOUND)
                    .json({ error: 'product do not exist' });
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
            const status = await productService.deleteProduct(id);
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
