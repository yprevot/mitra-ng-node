import { faker } from '@faker-js/faker';
import { BasicProduct } from '../../src/interfaces/all.interfaces';

class GeneratorProducts {
    nameList: Set<string> = new Set();

    public generateUniqueNames(): string {
        let name = faker.commerce.productName();
        while (this.nameList.has(name)) {
            name = faker.commerce.productName();
        }
        this.nameList.add(name);
        return name;
    }

    public generateBasicProduct(): BasicProduct {
        return {
            name: this.generateUniqueNames(),
            description: faker.lorem.words({ min: 1, max: 10 }),
            price: faker.number.float({ min: 1, max: 20000, fractionDigits: 2 }),
        };
    }

    public async generateProductList(MAX: number = 10): Promise<Array<BasicProduct>> {
        const list: Array<BasicProduct> = [];
        for (let i = 0; i < MAX; i++) {
            list.push(this.generateBasicProduct());
        }
        return list;
    }
}
export { GeneratorProducts };
