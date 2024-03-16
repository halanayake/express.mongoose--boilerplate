const {Router} = require('express');

const userController = require('../controllers/user-controller');

const router = Router();

router.get('/', userController.getAllUsers);
router.post('/', userController.saveUser);

module.exports = router;
