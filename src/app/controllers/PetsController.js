const { Pet } = require('../../database/models');

const petsController = {
  async get(req, res) {
    try {
      const pets = await Pet.findAll({
        include: 'User'
      });

      return res.status(200).send({ Pets: pets });
    } catch(error) {
      throw(error);
    }
  },

  async getById(req, res) {
    try {
      const pet = await Pet.findOne({
        where: {
          id: req.params.id
        },
        include: 'User'
      });

      return res.status(200).send({ Pet: pet });
    } catch(error) {
      throw(error);
    }
  },

  async post(req, res) {
    try {
      const newPet = await Pet.create(req.body);

      return res.status(200).send({ Pet: newPet });
    } catch(error) {
      throw(error);
    }
  },

  async put(req, res) {
    try {
      const [,[updatedPet]] = await Pet.update(req.body, {
        returning: true,
        where: {
          id: req.params.id,
        }
      });

      return res.status(200).send({ Pet: updatedPet });
    } catch(error) {
      throw(error);
    }
  },

  async delete(req, res) {
    try {
      const deletedPet = await Pet.destroy({
        returning: true,
        where: {
          id: req.params.id,
        }
      });

      return res.status(200).send({ Pet: deletedPet });
    } catch(error) {
      throw(error);
    }
  },
}

module.exports = petsController;