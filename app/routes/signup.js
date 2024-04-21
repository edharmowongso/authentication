'use strict'

const router = require('express').Router()
const CheckAuthorization = require('../middleware/authorization')
const Account = require('../lib/account')

router.use(CheckAuthorization)

router.get('/', CheckAuthorization, (req, res, next) => {
  Account.signup()
    .then(response => res.json(response))
    .catch(error => next(error))
})

module.exports = router
