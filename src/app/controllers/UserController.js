const { post } = require("./PetsController");

const userController = {

  async post(req, res) {
    console.log(req.body);

    return res.status(200).send({
      message: 'Post user',
    });
  },
};

module.exports = userController;