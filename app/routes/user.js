'use strict'

const router = require('express').Router()
const CheckAuthorization = require('../middleware/authorization')
const User = require('../lib/user')

router.use(CheckAuthorization)

router.get('/:userId', CheckAuthorization, (req, res, next) => {
  const {
    params: {
      userId
    },
  } = req

  User.getUserProfile()
    .then(response => res.json(response))
    .catch(error => next(error))
})

router.patch('/:userId', CheckAuthorization, (req, res, next) => {
  const {
    params: {
      userId
    },
  } = req

  User.updateUserProfile()
    .then(response => res.json(response))
    .catch(error => next(error))
})

module.exports = router
