const express = require('express');
const getUserController = require('../controller/user/getUsersController');
const createUserController = require('../controller/user/createUserController');
const updateUserController = require('../controller/user/updateUserController');
const router = express.Router();

router.get('/get_users', getUserController.getAllUsers);
router.get('/get_name_users', getUserController.getAllNameUsers);
router.post('/create_user', createUserController.createUser);
router.put('/update_user', updateUserController.updateUser);

module.exports = router;
