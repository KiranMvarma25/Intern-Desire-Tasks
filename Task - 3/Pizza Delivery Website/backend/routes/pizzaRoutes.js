const express = require('express');
const router = express.Router();
const { getPizzas, addPizza } = require('../controllers/pizzaController');

router.get('/', getPizzas);
router.post('/add', addPizza);

module.exports = router;
