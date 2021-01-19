const express = require('express');
const router = express.Router();
const { petsController } = require('../app/controllers');

router.get('/', petsController.get);
router.post('/', petsController.post);

module.exports = router;