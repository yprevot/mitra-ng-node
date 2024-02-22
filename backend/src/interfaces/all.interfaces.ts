interface IRGetByName {
    name: string;
}

interface BasicProduct {
    name: string;
    description: string;
    price: number;
}

interface Product extends BasicProduct {
    id: number;
}
export { IRGetByName, BasicProduct, Product };
