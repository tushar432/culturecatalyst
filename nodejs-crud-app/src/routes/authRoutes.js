const express = require('express');
const authController = require('../controllers/authController');
const {validationMiddleware, validateAuth} = require('../middlewares/validationMiddleware');

const router = express.Router();

router.post('/register', validationMiddleware(validateAuth), authController.register);
router.post('/login', validationMiddleware(validateAuth), authController.login);
router.get('/logout', authController.logout);

module.exports = router;