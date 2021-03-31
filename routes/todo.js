const express = require('express');
const router = express.Router();

const todoController = require('../controllers/todo_controller')

//Routes for adding and deleting todos
router.post('/add',todoController.add);

router.post('/delete',todoController.delete);

module.exports = router;
