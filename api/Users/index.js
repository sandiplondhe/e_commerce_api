const router = require('express').Router();
const UserController = require('../../controllers/usercontroller');

router.post('/', UserController.createUser);
router.get('/login', UserController.loginUser);

module.exports = router;
