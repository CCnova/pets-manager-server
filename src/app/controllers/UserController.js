const { post } = require("./PetsController");
const { User } = require('../../database/models');

const userController = {
  async get(req, res) {
    try {
      const users = await User.findAll();
  
      return res.status(200).send({
        Users: users,
      });
    } catch(error) {
      throw(error);
    }
  },

  async getById(req, res) {
    try {
      const user = await User.findOne({
        where: {
          id: req.params.id
        }
      });

      return res.status(200).send({ User: user });
    } catch(error) {
      throw(error);
    }
  },

  async post(req, res) {
    try {
      const userAlreadyExists = await User.findOne({
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

  async put(req, res) {
    try {
      const [,[updatedUser]] = await User.update(req.body, {
        returning: true, where: { id: req.params.id }
      });

      return res.status(200).send({ User: updatedUser });
    } catch(error) {
      throw(error);
    }
  },

  async delete(req, res) {
    try {
      const deletedUser = await User.destroy({
        returning: true,
        where: {
          id: req.params.id,
        }
      });

      res.status(200).send({ User: deletedUser });
    } catch(error) {
      throw(error);
    }
  }
};

module.exports = userController;