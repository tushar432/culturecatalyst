const express = require('express');
const resource1Controller = require('../controllers/resource1Controller');
const {validationMiddleware, validateResource1} = require('../middlewares/validationMiddleware');

const router = express.Router();

router.post('/test', validationMiddleware(validateResource1), resource1Controller.createResource1);
router.get('/test/:id', resource1Controller.getResource1);
router.put('/test/:id', validationMiddleware(validateResource1), resource1Controller.updateResource1);
router.delete('/test/:id', resource1Controller.deleteResource1);
router.get('/test', resource1Controller.getAllResources1);

module.exports = router;