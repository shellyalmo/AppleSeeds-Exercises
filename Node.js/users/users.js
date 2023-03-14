const fs = require("fs");
const uniqid = require("uniqid");

const getUsers = function () {
  return "Your users...";
};

const addUser = function (name, email) {
  const users = loadUsers();

  users.push({
    id: uniqid(),
    name: name,
    email: email,
  });

  saveUsers(users);
};

const updateUser = function (id, name, email) {
  const users = loadUsers();
  const userToUpdate = users.find((user) => user.id === id);

  userToUpdate.name = name;
  userToUpdate.email = email;
  removeUser(id);
  users.push(userToUpdate);
  saveUsers(users);
};

const removeUser = function (id) {
  const users = loadUsers();
  const usersToKeep = users.filter((user) => {
    return user.id !== id;
  });
  saveUsers(usersToKeep);
};

const saveUsers = function (users) {
  const dataJSON = JSON.stringify(users);
  fs.writeFileSync("users.json", dataJSON);
};

const loadUsers = function () {
  try {
    const dataBuffer = fs.readFileSync("users.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

module.exports = {
  getUsers,
  addUser,
  removeUser,
  updateUser,
};
