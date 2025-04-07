const { body, validationResult } = require('express-validator');

const resource2Validation = [
    body('name').isString().withMessage('Name must be a string').notEmpty().withMessage('Name cannot be empty'),
    body('description').isString().withMessage('Description must be a string').optional(),
    body('value').isNumeric().withMessage('Value must be a number').notEmpty().withMessage('Value cannot be empty'),
];

const validateResource2 = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

module.exports = {
    resource2Validation,
    validateResource2,
};