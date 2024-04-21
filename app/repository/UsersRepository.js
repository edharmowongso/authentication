'use strict'

const BaseRepository = require('./BaseRepository')

class UsersRepository extends BaseRepository {
  constructor (repoName) {
    super(repoName)
  }

  findByUserId (userId) {
    return new Promise((resolve, reject) => {
      this.pg(this.table)
        .where({ user_id: userId })
        .limit(1)
        .then((row) => resolve(row))
        .catch((error) => reject(error))
    })
  }

  // TO DO
  async closeAccount() {

  }
}

module.exports = UsersRepository
