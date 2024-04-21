'use strict'

class User {
  async getUserProfile() {
    return {
      "message": "User details by user id"
    }
  }

  async updateUserProfile() {
    return {
      "message": "User successfully updated"
    }
  }
}

module.exports = new User()
