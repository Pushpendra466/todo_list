const express = require('express');
const router = express.Router();

const todoController = require('../controllers/todo_controller')
router.get('/add',todoController.add);

router.get('/delete',todoController.delete);

module.exports = router;
