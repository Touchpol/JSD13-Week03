const express = require('express');
const router = express.Router();
const { getAll, getById, create, update } = require('../controllers/photographerController');
const auth = require('../middleware/auth');

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', auth, create);
router.put('/:id', auth, update);

module.exports = router;
