const { Product } = require('../models/product.model');

async function search({ id, name }) {
  const products = [];

  if (id) {
    const product = await Product.findOne({ id });
  } else if (name) {
    const product = await Product.findOne({ name });
  } else {
  }

  return products;
}

module.exports = { search };
