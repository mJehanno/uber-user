const Schema = require('mongoose').Schema;
const argon2 = require('argon2');

const userSchema = new Schema({
  email: String,
  password: String,
  address: String,
  city: String,
  country: String,
});

userSchema.pre('save', function (next) {
  if (this.isNew) {
    argon2.hash(this.password).then((hash) => {
      this.password = hash;
      next();
    }).catch((err) => {
      console.log(err);
    });
  }
});

module.exports = userSchema;
