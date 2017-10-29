'use strict';
const Promise = require('bluebird')

// Helper method to remove all items from a model and create new ones
const removeAllAddNew = (model, data) => Promise.resolve()
  .then(() => model.destroyAll())
  .then(() => model.create(data))
  .then(res => console.log(`Model ${model.modelName}: ${res.length} items added`))

// Get the image root from the environment or use the default value for local development
const imageRoot = process.env.IMAGE_ROOT || 'http://localhost:3000/images/'

// Helper to map over the items and prepend the image url
const setImageRoot = (items) => items.map(item => Object.assign(item, {image: imageRoot + item.image}))

// The actual boot script
module.exports = (app, cb) => Promise
  .all([
    removeAllAddNew(app.models.Category, setImageRoot(require('./sample-data/categories'))),
    removeAllAddNew(app.models.Product, setImageRoot(require('./sample-data/products'))),
  ])
  .asCallback(cb)
