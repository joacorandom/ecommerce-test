const { OK, NO_CONTENT } = require('http-status-codes');

const productService = require('../services/product-service');
const isPalindrome = require('../helpers/is-palindrome');

async function search(req, res) {
  const { name, id } = req.query;

  const products = await productService.search({ name, id });

  if (!products || products.length === 0) {
    return res.status(NO_CONTENT);
  }

  const [product] = products;
  if (products.length === 1 && isPalindrome(name) && isPalindrome(product.name)) {
    product.price = Math.round(product.price / 2);
  }

  return res.status(OK).json(products);
}

module.exports = {
  search,
};
