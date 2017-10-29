'use strict';

const disabledMethods = [
  'create',
  'createChangeStream',
  'deleteById',
  'patchOrCreate',
  'prototype.patchAttributes',
  'prototype.exists',
  'replaceById',
  'replaceOrCreate',
  'update',
  'upsert',
  'upsertWithWhere',
]

module.exports = function(Product) {

  disabledMethods.forEach(method => Product.disableRemoteMethodByName(method))

  /**
  * Return true if input is larger than zero
  * @param {number} quantity Number to validate
  */
  const validQuantity = quantity => Boolean(quantity > 0);

  /**
   * Buy this product
   * @param {number} quantity Number of products to buy
   * @param {Function(Error, object)} callback
   */
  Product.prototype.buy = function(quantity, callback) {
    if (!validQuantity(quantity)) {
      return callback(`Invalid quantity ${quantity}`)
    }
    const result = {
      status: `You bought ${quantity} product(s)`,
    };
    callback(null, result);
  };

};
