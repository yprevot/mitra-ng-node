import { ProductDataModel, Product, BasicProduct } from '../data-source/products.data-source';

class ProductService {
    public async getAll(): Promise<Product[]> {
        const products: Product[] = await ProductDataModel.all();
        return products || [];
    }

    public async getProductByName(name: string): Promise<Product | undefined> {
        const product: Product | undefined = await ProductDataModel.getByName(name);
        return product;
    }

    public async createProduct(product: BasicProduct): Promise<boolean> {
        const status = await ProductDataModel.create(product);
        return status;
    }

    public async updateProduct(product: Product): Promise<boolean> {
        const exist = await ProductDataModel.exist(product.id);
        if (!exist) return false;
        const status = await ProductDataModel.update(product);
        return status;
    }

    public async deleteProduct(id: number): Promise<boolean> {
        const exist = await ProductDataModel.exist(id);
        if (!exist) return false;
        const status = await ProductDataModel.delete(id);
        return status;
    }
}

export { ProductService };
