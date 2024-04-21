'use strict'

const RepositoryManager = require('../../repository')
const { ServiceError } = require('../../errors')

class User {
  constructor () {
    const rm = new RepositoryManager()

    this.usersRepository = rm.getRepository('Users')
  }

  async getUserProfile(userId) {
    const userData = await this.usersRepository.findByUserId(userId)

    if (!userData) throw new ServiceError('User not found')

    return {
      message: "User details by user id",
      user: {
        user_id: userData.user_id,
        nickname: userData.nickname,
        comment: userData.comment
      }
    }
  }

  async updateUserProfile(userId, updatedData) {
    const userData = await this.usersRepository.findByUserId(userId)

    if (!userData) throw new ServiceError('User not found')

    await this.usersRepository.update({ user_id: userId }, updatedData)

    return {
      "message": "User successfully updated"
    }
  }
}

module.exports = new User()
