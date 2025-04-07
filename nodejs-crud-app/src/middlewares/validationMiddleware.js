const { body, validationResult } = require('express-validator');

const validateResource1 = [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Email is not valid'),
];

const validateResource2 = [
    body('title').notEmpty().withMessage('Title is required'),
    body('description').notEmpty().withMessage('Description is required'),
];

const validateAuth = [
    body('username').notEmpty().withMessage('Username is required'),
    body('password').notEmpty().withMessage('Password is required'),
]

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};


const validationMiddleware = (validations) => {
    return [
        ...validations,
        validate
    ];
};

module.exports = {
    validateResource1,
    validateResource2,
    validateAuth,
    validationMiddleware,
};