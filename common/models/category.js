'use strict';

const disabledMethods = [
  'create',
  'createChangeStream',
  'deleteById',
  'patchOrCreate',

  'prototype.patchAttributes',
  'prototype.exists',
  'prototype.destroyById_products',

  'prototype.__create__products',
  'prototype.__delete__products',
  'prototype.__destroyById__products',
  'prototype.__updateById__products',

  'replaceById',
  'replaceOrCreate',
  'update',
  'upsert',
  'upsertWithWhere',
]


module.exports = (Category) => {

  disabledMethods.forEach(method => Category.disableRemoteMethodByName(method))

};
