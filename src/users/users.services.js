const {
  getUsers,
  createUser,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("./users.controllers");

const getUsersController = (req, res) => {
  const users = getUsers();
  res.status(200).json(users);
};

const createUserController = (req, res) => {
  const user = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    birthday: req.body.birthday,
  };
  if (user.first_name && user.email && user.password) {
    const newUser = createUser(user);
    res.status(201).json(newUser);
  } else {
    res.status(400).json({ message: "todos los campos son requeridos" });
  }
};

const getUserByIdController = (req, res) => {
  const { id } = req.params;
  const user = getUserById(id);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: "usuario no encontrado" });
  }
};

const patchUserByController = (req, res) => {
  const id = req.params.id;
  const { first_name, last_name, email, password, birthday } = req.body;

  updateUserById(id, { first_name, last_name, email, password, birthday })
    .then((data) => {
      if (data[0]) {
        res.status(200).json({
          message: "Usuario actualizado",
        });
      } else {
        res.status(404).json({
          message: "Usuario no encontrado",
        });
      }
    })
    .catch((err) => {
      res.status(400).json({
        message: "Error al actualizar usuario",
      });
    });
};

const putUserByIdController = (req, res) => {
  const { id } = req.params;
  // debemos hacer lo mismo de createUser para validar que los campos esten completos
  const { first_name, last_name, email, password, birthday } = req.body;
  if (first_name && last_name && email && password && birthday) {
    updateUserById(id, { first_name, last_name, email, password, birthday })
      .then((data) => {
        res.status(200).json({
          message: "usuario actualizado",
        });
      })
      .catch((err) => {
        res.status(404).json({
          message: "usuario no encontrado",
        });
      });
  } else {
    res.status(400).json({ message: "todos los campos son requeridos" });
  }
};

const deleteUserByIdController = (req, res) => {
  const { id } = req.params;
  deleteUserById(id);
  res.status(204).json();
};

module.exports = {
  getUsersController,
  createUserController,
  getUserByIdController,
  putUserByIdController,
  deleteUserByIdController,
  patchUserByController,
};
