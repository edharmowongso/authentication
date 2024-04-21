'use strict'

const { UnauthorizedError } = require('../errors')

module.exports = (req, res, next) => {
  const Authorization = req.get('Authorization')
  let SplitAuthorization = null
  try {
    SplitAuthorization = Authorization.split(' ')
  } catch (err) {
    return next(new UnauthorizedError('Missing authorization header'))
  }

  if (SplitAuthorization.length !== 2) {
    return next(new UnauthorizedError('Invalid header format'))
  }

  next()
}
