const { check } = require('express-validator/check')

module.exports = {
  updateProfile: [
    check('nickname')
      .optional()
      .isString()
      .isLength({ min: 6, max: 30 })
      .withMessage('should between 6 and 30 characters')
      .trim(),
    check('comment')
      .optional()
      .isString()
      .isLength({ min: 1, max: 100 })
      .withMessage('should between 1 and 100 characters')
      .trim(),
    check('user_id')
      .custom((value, {}) => {
        if (String(value) && value.length > 0) {
          throw new Error('not updatable user_id & password');
        }

        return true
      }),
    check('password')
      .custom((value, {}) => {
        if (String(value) && value.length > 0) {
          throw new Error('not updatable user_id & password');
        }

        return true
      }),
  ],
}
