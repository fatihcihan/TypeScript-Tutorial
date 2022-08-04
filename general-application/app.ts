import { Product } from "./product";
import { ProductManager } from "./ProductManager";


let _productManager = new ProductManager();
let result;

result = _productManager.getProducts();

result = _productManager.getById(2);

let product = new Product();
product.name = "Iphone 6";
product.price = 7000;
product.category = "Telefon";
// _productManager.saveProduct(product);
_productManager.getProducts();

_productManager.deleteProduct(result);

console.log(result);