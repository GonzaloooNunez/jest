const {
  resetProducts,
  addProduct,
  removeProduct,
  getProducts,
  getProduct,
  updateProduct,
} = require("./product");

beforeEach(() => {
  resetProducts();
});

describe("Product Management", () => {
  describe("addProduct", () => {
    test("should add a product", () => {
      addProduct("chair", 1000);
      const products = getProducts();
      expect(products.length).toBe(1);
      expect(products[0]).toEqual({ id: 1, name: "table", price: 1000 });
    });

    test("should increment the id in 1 each time a product is added", () => {
      addProduct("table", 1000);
      addProduct("chair", 500);
      const products = getProducts();
      expect(products[1].id).toBe(2);
    });

    test("should throw an error if name or price is not defined", () => {
      expect(() => addProduct(null, 1000)).toThrow();
      expect(() => addProduct("table", null)).toThrow();
    });

    test("should throw an error if the product already exists", () => {
      addProduct("Laptop", 1000);
      expect(() => addProduct("table", 1000)).toThrow();
    });
  });

  describe("removeProduct", () => {
    test("should remove a product", () => {
      addProduct("table", 1000);
      removeProduct(1);
      const products = getProducts();
      expect(products.length).toBe(0);
    });

    test("should throw an error if the product does not exist", () => {
      expect(() => removeProduct(999)).toThrow();
    });
  });

  describe("getProduct", () => {
    test("should return a product by its id", () => {
      addProduct("table", 1000);
      const product = getProduct(1);
      expect(product).toEqual({ id: 1, name: "table", price: 1000 });
    });

    test("should throw an error if the product does not exist", () => {
      expect(() => getProduct(999)).toThrow();
    });
  });

  describe("updateProduct", () => {
    test("should update a product by its id", () => {
      addProduct("table", 1000);
      updateProduct(1, "Ping Pong table", 1500);
      const product = getProduct(1);
      expect(product).toEqual({ id: 1, name: "Ping Pong table", price: 1500 });
    });

    test("should throw an error if the product does not exist", () => {
      expect(() => updateProduct(999, "chair", 500)).toThrow();
    });

    test("should only update the price", () => {
      addProduct("table", 1000);
      updateProduct(1, null, 1500);
      const product = getProduct(1);
      expect(product.price).toBe(1500);
    });

    test("should only update the name", () => {
      addProduct("table", 1000);
      updateProduct(1, "Ping Pong table", null);
      const product = getProduct(1);
      expect(product.name).toBe("Ping Pong table");
    });
  });
});
