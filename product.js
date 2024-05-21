let products = [];
let id = 0;

function resetProducts() {
  products = [];
  id = 0;
}

function addProduct(name, price) {
  if (!name || !price) {
    throw new Error("Name and price must be defined");
  }
  if (products.find((product) => product.name === name)) {
    throw new Error("Product already exists");
  }
  id += 1;
  products.push({ id, name, price });
}

function removeProduct(productId) {
  const index = products.findIndex((product) => product.id === productId);
  if (index === -1) {
    throw new Error("Product does not exist");
  }
  products.splice(index, 1);
}

function getProducts() {
  return products;
}

function getProduct(productId) {
  const product = products.find((product) => product.id === productId);
  if (!product) {
    throw new Error("Product does not exist");
  }
  return product;
}

function updateProduct(productId, name, price) {
  const product = products.find((product) => product.id === productId);
  if (!product) {
    throw new Error("Product does not exist");
  }
  if (name) {
    product.name = name;
  }
  if (price) {
    product.price = price;
  }
}

module.exports = {
  resetProducts,
  addProduct,
  removeProduct,
  getProducts,
  getProduct,
  updateProduct,
};
