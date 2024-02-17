interface BasicProduct {
    name: string;
    description: string;
    price: number;
}

interface Product extends BasicProduct {
    id: number;
}

const products: Array<Product> =[{
    id: 1,
    name: 'Math',
    description: 'Book of math',
    price: 34.45,
  }
];

class ProductModel {

    static getIndexByName(name:  string) {
        return products.findIndex( product => product.name === name);
    } 

    static all(): Array<Product>{
        return products;
    }

    static getByName(name: string): Product | undefined {
        return products.find(product => product.name === name);
    }

    static create (basicProduct: BasicProduct): boolean{
        const index = this.getIndexByName(basicProduct.name);
        if(index != -1)
            return false;

        const newProduct = {
            id: products.length+1,
            ...basicProduct
        }
        products.push(newProduct);
        return true;
    }

    static update (productToUpdate: Product): void {
        const index =  products.findIndex( product => product.id === productToUpdate.id);
        products[index] = productToUpdate;
    }

    static delete (id : number): boolean {
        const index =  products.findIndex( product => product.id === id);
        if(index === -1)
            return false;
        products.splice(index,1);
        return true;
    }

};
export {
    BasicProduct,
    Product,
    ProductModel,
}