const express = require('express');
const UserController = require('./../controllers/UserController');
const router = express.Router();
// router.param('id',tourcontroller.checkID);


router.route('/').get(UserController.sayHi)
router.route('/register').post(UserController.signup);
router.route('/login').post(UserController.login);

module.exports = router;