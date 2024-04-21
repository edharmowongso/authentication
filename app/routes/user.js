'use strict'

const router = require('express').Router()
const CheckAuthorization = require('../middleware/authorization')
const User = require('../lib/user')
const UserFormValidation = require('../middleware/form_requirement').User

router.use(CheckAuthorization)
router.get('/:userId', (req, res, next) => {
  const {
    params: {
      userId
    },
  } = req

  User.getUserProfile(userId)
    .then(response => res.json(response))
    .catch(error => next(error))
})

router.patch('/:userId', UserFormValidation.updateProfile, (req, res, next) => {
  const {
    params: {
      userId
    },
    body
  } = req

  User.updateUserProfile(userId, body)
    .then(response => res.json(response))
    .catch(error => next(error))
})

module.exports = router
