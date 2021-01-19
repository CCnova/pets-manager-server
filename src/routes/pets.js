const express = require('express');
const router = express.Router();
const { petsController } = require('../app/controllers');

router.get('/', petsController.get);
router.get('/:id', petsController.getById);
router.post('/', petsController.post);
router.put('/:id', petsController.put);
router.delete('/:id', petsController.delete);

module.exports = router;