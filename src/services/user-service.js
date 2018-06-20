const mongoose = require('mongoose');
const userSchema = require('../schemas/user-schema');

const userModel = mongoose.model('Users', userSchema);

function getUsers() {
  return userModel.find();
}

function getUserById(id) {
  return userModel.findById(id);
}

function createUser(user) {
  return userModel.create(user);
}

function updateUser(user) {
  return userModel.updateOne({ id: user.id }, user);
}

function deleteUser(id) {
  return userModel.remove({ id });
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
