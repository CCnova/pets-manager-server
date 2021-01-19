const { post } = require("../../routes/pets");
const { Pet } = require('../../database/models');

const petsController = {
  async get(req, res, next) {
    try {
      const pets = await Pet.findAll();

      return res.status(200).send({ Pets: pets });
    } catch(error) {
      throw(error);
    }
  },

  async post(req, res, next) {
    try {
      const newPet = await Pet.create(req.body);

      return res.status(200).send({ Pet: newPet });
    } catch(error) {
      throw(error);
    }
  }
}

module.exports = petsController;