export interface BasicProduct {
    name: string;
    description: string;
    price: number;
}

export interface Product extends BasicProduct {
    id: number;
}

const products: Array<Product> =[{
    id: 1,
    name: 'Math',
    description: 'Book of math',
    price: 34.45,
  }
];

const getIndexByName = (name:  string) => products.findIndex( product => product.name === name);

export const getAllProducts = (): Array<Product> => {
    return products;
}

export const getProductByName = (name: string): Product | undefined =>{
    return products.find(product => product.name === name);
}

export const createProduct = (basicProduct: BasicProduct): boolean => {
    const index = getIndexByName(basicProduct.name);
    if(index != -1)
        return false;

    const newProduct = {
        id: products.length+1,
        ...basicProduct
    }
    products.push(newProduct);
    return true;
}

export const updateProduct = (productToUpdate: Product): void => {
    const index =  products.findIndex( product => product.id === productToUpdate.id);
    products[index] = productToUpdate;
}

export const deleteProduct = (id : number) : boolean => {
    const index =  products.findIndex( product => product.id === id);
    if(index === -1)
        return false;
    products.splice(index,1);
    return true;
}
