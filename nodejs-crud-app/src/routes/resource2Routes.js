const express = require('express');
const resource2Controller = require('../controllers/resource2Controller');
const {validationMiddleware, validateResource2} = require('../middlewares/validationMiddleware');

const router = express.Router();

router.post('/test', validationMiddleware(validateResource2), resource2Controller.createResource2);
router.get('/test/:id', resource2Controller.getResource2);
router.put('/test/:id', validationMiddleware(validateResource2), resource2Controller.updateResource2);
router.delete('/test/:id', resource2Controller.deleteResource2);
router.get('/test', resource2Controller.getAllResources2);

module.exports = router;