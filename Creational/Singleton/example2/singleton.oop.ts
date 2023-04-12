class Product {
  constructor(
    private readonly _id: number,
    private readonly _name: string,
    private readonly _cost: number
  ) {}

  get name(): string {
    return this._name;
  }

  get cost(): number {
    return this._cost;
  }

  get id(): number {
    return this._id;
  }
}

class ShoppingCart {
  private static instance: ShoppingCart | null = null;
  private readonly products: Product[] = [];

  private constructor() {}

  static getInstance(): ShoppingCart {
    if (!ShoppingCart.instance) {
      ShoppingCart.instance = new ShoppingCart();
    }
    return ShoppingCart.instance;
  }

  addProduct(product: Product) {
    this.products.push(product);
  }

  getProducts(): Product[] {
    return [...this.products];
  }

  clear() {
    this.products.length = 0;
  }
}

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

testShoppingCart();

export { testShoppingCart };
