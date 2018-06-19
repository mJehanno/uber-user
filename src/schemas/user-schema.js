const Schema = require('mongoose').Schema;

const userSchema = new Schema({
  email: String,
  password: String,
  address: String,
  city: String,
  country: String,
});

module.exports = userSchema;
