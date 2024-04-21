'use strict'

function router (app) {
  app.use('/users', require('./user'))
  app.use('/signup', require('./signup'))
  app.use('/close', require('./close'))
}

module.exports = router
