const { check } = require('express-validator/check')

module.exports = {
  signup: [
    check('user_id')
      .exists()
      .withMessage('required user_id and password')
      .isString()
      .isLength({ min: 6, max: 20 })
      .withMessage('should between 6 and 20 characters')
      .matches(/^[A-Za-z0-9]+$/)
      .withMessage('should be alphanumeric'),
    check('password')
      .exists()
      .withMessage('required user_id and password')
      .isString()
      .isLength({ min: 8, max: 20 })
      .withMessage('should between 8 and 20 characters')
      .matches(/^[\x21-\x7E]+$/)
      .withMessage('should be alphanumeric'),
  ],
}
