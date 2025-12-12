import model from "./model.js";

export function findAllUsers() {
  return model.find();
}

export function findUserById(userId) {
  return model.findById(userId);
}

export function findUserByUsername(username) {
  return model.findOne({ username: username });
}

export function findUserByCredentials(username, password) {
  return model.findOne({ username: username, password: password });
}

export function createUser(user) {
  if (!user._id) {
    user._id = Date.now().toString();
  }
  return model.create(user);
}

export function updateUser(userId, user) {
  return model.updateOne({ _id: userId }, { $set: user });
}

export function deleteUser(userId) {
  return model.deleteOne({ _id: userId });
}
