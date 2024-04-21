'use strict'

class Account {
  async close() {
    return {
      "message": "Account and user successfully removed"
    }
  }

  async signup() {
    return {
      "message": "Account successfully created"
    }
  }
}

module.exports = new Account()
