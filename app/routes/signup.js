'use strict'

const router = require('express').Router()
const AccountFormValidation = require('../middleware/form_requirement').Account
const Account = require('../lib/account')

router.post('/', AccountFormValidation.signup, (req, res, next) => {
  const { body } = req

  Account.signup(body)
    .then(response => res.json(response))
    .catch(error => next(error))
})

module.exports = router
