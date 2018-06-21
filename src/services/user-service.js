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
  return userModel.updateOne({ _id: user.id }, user);
}

function deleteUser(id) {
  return userModel.remove({ _id: id });
}
function deleteUsers() {
  return userModel.remove({});
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  deleteUsers,
};
