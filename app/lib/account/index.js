'use strict'

const RepositoryManager = require('../../repository')
const { ServiceError } = require('../../errors')

class Account {
  constructor () {
    const rm = new RepositoryManager()

    this.usersRepository = rm.getRepository('Users')
  }

  async close(userId) {
    const userData = await this.usersRepository.findByUserId(userId)

    if (!userData) throw new ServiceError('User not found')

    await this.usersRepository.closeAccount(userId)

    return {
      "message": "Account and user successfully removed"
    }
  }

  async signup(userData) {
    const userData = await this.usersRepository.findByUserId(userId)

    if (userData) throw new ServiceError('Already same user_id is used')

    await this.usersRepository
      .insert({
        user_id: userData.user_id,
        nickname: userData.user_id,
      })

    return {
      "message": "Account successfully created"
    }
  }
}

module.exports = new Account()
