import { BasicProduct, Product } from '../interfaces/all.interfaces';

const products: Array<Product> = [
    {
        id: 1,
        name: 'Math',
        description: 'Book of math',
        price: 34.45,
    },
];

class ProductDataModel {
    static async getIndexByName(name: string) {
        return new Promise((resolve) => {
            resolve(products.findIndex((product) => product.name === name));
        });
    }

    static async all(): Promise<Array<Product>> {
        return new Promise((resolve) => {
            resolve(products);
        });
    }

    static async getByName(name: string): Promise<Product | undefined> {
        return new Promise((resolve) => {
            resolve(products.find((product) => product.name === name));
        });
    }

    static async create(basicProduct: BasicProduct): Promise<boolean> {
        const index = await this.getIndexByName(basicProduct.name);
        if (index !== -1) return false;

        const newProduct = {
            id: products.length + 1,
            ...basicProduct,
        };
        products.push(newProduct);
        return true;
    }

    static async update(productToUpdate: Product): Promise<boolean> {
        const index = products.findIndex((product) => product.id === productToUpdate.id);
        products[index] = productToUpdate;
        return true;
    }

    static async delete(id: number): Promise<boolean> {
        const index = products.findIndex((product) => product.id === id);
        if (index === -1) return false;
        products.splice(index, 1);
        return true;
    }

    static async exist(id: number): Promise<boolean> {
        const index = products.findIndex((product) => product.id === id);
        return index !== -1;
    }
}
export { BasicProduct, Product, ProductDataModel };
