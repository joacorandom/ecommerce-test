const { assert } = require('chai');
const productService = require('../../src/services/product-service');

describe('testing product-service', function () {
  it('should get a single product', async function () {
    const productId = 2656;
    const product = await productService.search({ id: productId });
    assert.equal(product.id, productId);
  });
});
