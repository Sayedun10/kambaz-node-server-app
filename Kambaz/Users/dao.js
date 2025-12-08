import Database from "../Database/index.js";

export function findAllUsers() {
  return Database.users;
}

export function findUserById(userId) {
  return Database.users.find((user) => user._id === userId);
}

export function findUserByUsername(username) {
  return Database.users.find((user) => user.username === username);
}

export function findUserByCredentials(username, password) {
  return Database.users.find(
    (user) => user.username === username && user.password === password
  );
}

export function createUser(user) {
  const newUser = { ...user, _id: Date.now().toString() };
  Database.users = [...Database.users, newUser];
  return newUser;
}

export function updateUser(userId, user) {
  const { users } = Database;
  const userIndex = users.findIndex((u) => u._id === userId);
  users[userIndex] = { ...users[userIndex], ...user };
  return users[userIndex];
}

export function deleteUser(userId) {
  const { users } = Database;
  Database.users = users.filter((user) => user._id !== userId);
}
