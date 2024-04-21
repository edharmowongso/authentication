'use strict'

const BaseRepository = require('./BaseRepository')

class UsersRepository extends BaseRepository {
  constructor (repoName) {
    super(repoName)
  }
}

module.exports = UsersRepository
