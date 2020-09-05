const mongoose = require('mongoose');
const { MongoDBError } = require('common-errors').data;

const host = process.env.MONGODB_HOST || 'localhost';
const port = process.env.MONGODB_PORT || 27017;
const dbName = process.env.MONGODB_DBNAME || 'test';

const Product = mongoose.model(
  'Product',
  new mongoose.Schema({
    id: Number,
    brand: String,
    description: String,
    image: String,
    price: { type: Number, min: 0 },
  })
);

async function connect() {
  try {
    return await mongoose.connect(`mongodb://${host}:${port}/${dbName}`, {
      keepAlive: true,
      socketTimeoutMS: 10000,
    });
  } catch (err) {
    throw new MongoDBError('Error connecting to', err);
  }
}

module.exports = { Product, connect };
