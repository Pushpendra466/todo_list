const express = require('express');
const router = express.Router();

const todoController = require('../controllers/todo_controller')
router.post('/add',todoController.add);

router.post('/delete',todoController.delete);

module.exports = router;
