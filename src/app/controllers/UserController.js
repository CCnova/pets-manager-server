const { post } = require("./PetsController");
const { User } = require('../../database/models');

const userController = {
  async get(req, res) {
    const users = await User.findAll();

    return res.status(200).send({
      Users: users,
    });
  },

  async post(req, res) {
    try {
      const userAlreadyExists = User.findOne({
        where: {
          email: req.body.email,
        }
      }) !== null;

      if (userAlreadyExists) {
        return res.status(403).send({
          message: 'User with this email already exists!',
        })
      }
      const newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });

      return res.status(200).send({
        User: newUser,
        message: 'User registered with success!',
      });
    
    } catch(error) {
      throw(error);
    }    
  },
};

module.exports = userController;