const Schema = require('mongoose').Schema;
const bcrypt = require('bcrypt');
const saltRounds = 10;

const userSchema = new Schema({
  email: String,
  password: String,
  address: String,
  city: String,
  country: String,
});

userSchema.pre('save', function (next) {
  if (this.isNew) {
    bcrypt.hash(this.password, saltRounds, (err, hash) => {
      this.password = hash;
      next();
    });
  }
});

module.exports = userSchema;
