const { post } = require("../routes/pets");

const petsController = {
  get(req, res, next) {

    return res.status(200).send({
      message: 'Hello World',
    });
  },

  post(req, res, next) {

    return res.status(200).send({
      message: 'Post Pets',
    });
  }
}

module.exports = petsController;