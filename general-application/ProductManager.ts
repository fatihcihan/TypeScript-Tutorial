import { IProductService } from "./IProductService";
import { Product } from "./product";
import { SimpleDataSource } from "./simple-datasource";

export class ProductManager implements IProductService {

    private dataSource: SimpleDataSource;
    private products: Product[];

    constructor() {
        this.dataSource = new SimpleDataSource();
        this.products = new Array<Product>();
        this.dataSource.getProducts().forEach(p => this.products.push(p));
    }

    getById(id: number): Product {
        return this.products.filter(p => p.id === id)[0];
    }
    getProducts(): Product[] {
        return this.products;
    }
    saveProduct(product: Product): void {
        if (product.id == 0 || product.id == null) {
            product.id = this.generateId();
            this.products.push(product);
        } else {
            let index = this.products.indexOf(product);
            this.products.splice(index, 1, product); // verilen indexten sonra bir tane silip product'ı ekliyor
        }
    }
    deleteProduct(product: Product): void {
        let index = this.products.indexOf(product); // verilen indexten itibaren bir elemani siliyor.
        if (index > 0){
            this.products.splice(index,1);
        }
    }

    private generateId(): number {
        let key = 1;
        while (this.getById(key) != null) {
            key++;
        }
        return key;
    }

}