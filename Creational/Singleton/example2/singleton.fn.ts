interface Product {
  id: number;
  name: string;
  cost: number;
}

interface ShoppingCart {
  addProduct: (product: Product) => void;
  getProducts: () => Product[];
  clear: () => void;
}

const createShoppingCart = (() => {
  let instance: ShoppingCart;

  const createInstance = (products: Product[] = []): ShoppingCart => {
    return {
      addProduct: (product: Product) => {
        products.push(product);
      },
      getProducts: () => [...products],
      clear: () => {
        products.length = 0;
      },
    };
  };

  return {
    getInstance(products: Product[] = []): ShoppingCart {
      if (!instance) {
        instance = createInstance(products);
      }

      return instance;
    },
  };
})();

const testShoppingCart = () => {
  const cart1 = createShoppingCart.getInstance();
  const cart2 = createShoppingCart.getInstance();

  console.log("cart1 === cart2", cart1 === cart2); // true

  const product1 = { id: 1, name: "Product 1", cost: 10 };
  const product2 = { id: 2, name: "Product 2", cost: 20 };
  const product3 = { id: 3, name: "Product 3", cost: 30 };

  cart1.addProduct(product1);
  cart1.addProduct(product2);
  cart1.addProduct(product3);

  console.log("cart1 products", cart1.getProducts());

  cart2.addProduct(product1);
  cart2.addProduct(product2);

  console.log("cart2 products", cart2.getProducts());
};

testShoppingCart();

export { testShoppingCart };
