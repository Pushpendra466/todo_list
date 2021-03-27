const express = require('express');

const router = express.Router();

const homeController = require('../controllers/home_controller');

//for home route '/'
router.get('/',homeController.home);

//route for add todo and delete todo
router.use('/todo',require('./todo'));


module.exports = router;