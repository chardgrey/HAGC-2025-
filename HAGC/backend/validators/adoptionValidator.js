const { body } = require('express-validator');

exports.adoptionApplicationValidator = [
  body('userId')
    .isMongoId().withMessage('Invalid user ID'),

  body('petId')
    .isMongoId().withMessage('Invalid pet ID'),

  body('message')
    .trim()
    .escape()
    .isLength({ min: 1 }).withMessage('Message is required')
];


