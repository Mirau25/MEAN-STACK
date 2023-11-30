import User from '../models/User.js';


export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    next(error);
  }
};

export const createUser = async (req, res, next) => {
  try {
    const { username } = req.body;

    const userFound = await User.findOne({ username });


    if (userFound) {
      const error = new Error("El usuario ya existe");
      error.status = 409;
      throw error;
    }

    const newUser = new User({ username });
    const userSaved = await newUser.save();
    return res.json(userSaved);
  } catch (error) {
  return;
  }
};


export const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userDeleted = await User.findByIdAndDelete(id);

    
    if (!userDeleted) {
      const error = new Error("Usuario no encontrado");
      error.status = 404;
      throw error;
    }

    return res.sendStatus(204); 
  } catch (error) {
    return;
  }
};
