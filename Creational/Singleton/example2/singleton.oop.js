"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testShoppingCart = void 0;
class Product {
    constructor(_id, _name, _cost) {
        this._id = _id;
        this._name = _name;
        this._cost = _cost;
    }
    get name() {
        return this._name;
    }
    get cost() {
        return this._cost;
    }
    get id() {
        return this._id;
    }
}
class ShoppingCart {
    constructor() {
        this.products = [];
    }
    static getInstance() {
        if (!ShoppingCart.instance) {
            ShoppingCart.instance = new ShoppingCart();
        }
        return ShoppingCart.instance;
    }
    addProduct(product) {
        this.products.push(product);
    }
    getProducts() {
        return [...this.products];
    }
    clear() {
        this.products.length = 0;
    }
}
ShoppingCart.instance = null;
function testShoppingCart() {
    const cart1 = ShoppingCart.getInstance();
    const cart2 = ShoppingCart.getInstance();
    console.log("cart1 === cart2", cart1 === cart2); // true
    const product1 = new Product(1, "Product 1", 10);
    const product2 = new Product(2, "Product 2", 20);
    const product3 = new Product(3, "Product 3", 30);
    cart1.addProduct(product1);
    cart1.addProduct(product2);
    cart1.addProduct(product3);
    console.log("cart1 products", cart1.getProducts());
    cart2.addProduct(product1);
    cart2.addProduct(product2);
    console.log("cart2 products", cart2.getProducts());
}
exports.testShoppingCart = testShoppingCart;
testShoppingCart();
