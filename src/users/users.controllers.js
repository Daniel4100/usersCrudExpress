const uuid = require("uuid");

const users = [
  {
    id: "76dee74e-fbfd-43bf-841e-48a12ee66661",
    first_name: "Jhener",
    last_name: "Daniel",
    email: "Jhener990@gmail.com",
    password: "abcd1234",
    birthday: "1999/04/10",
  },
];

const getUsers = () => {
  return users;
};

const createUser = (user) => {
  const newUser = { ...user, id: uuid.v4() };
  const emailExiste = users.find((user) => user.email === newUser.email);
  if (emailExiste) {
    return { message: "el email ya existe" };
  } else {
    users.push(newUser);
    return newUser;
  }
};

const getUserById = (id) => {
  return users.find((user) => user.id === id);
};

const updateUserById = (id, user) => {
  const index = users.findIndex((user) => user.id === id);
  users[index] = { ...user, id };
  return users[index];
};

const deleteUserById = (id) => {
  const index = users.findIndex((user) => user.id === id);
  users.splice(index, 1);
};

module.exports = {
  getUsers,
  createUser,
  getUserById,
  updateUserById,
  deleteUserById,
};
