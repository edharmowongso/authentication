
const DBConnection = require('../config/database/connection')
const RepoManager = require('./index')

class BaseRepository {
  constructor (repoName) {
    this.pg = new DBConnection().getInstance()
    this.rm = new RepoManager()
    this.table = repoName.replace(/(?:^|\.?)([A-Z])/g, (x, y) => `_${y.toLowerCase()}`).replace(/^_/, '')
  }

  findBy (where, orderBy = undefined) {
    return new Promise((resolve, reject) => {
      const query = this.pg(this.table)
        .where(where)

      if (orderBy) {
        query.orderBy(orderBy)
      }

      query
        .then((rows) => resolve(rows))
        .catch((error) => reject(error))
    })
  }

  findOneBy (where) {
    return new Promise((resolve, reject) => {
      this.pg(this.table)
        .where(where)
        .limit(1)
        .then((rows) => {
          return resolve(rows.pop())
        })
        .catch((error) => reject(error))
    })
  }

  insert (payload) {
    return new Promise((resolve, reject) => {
      this.pg(this.table)
        .insert(payload)
        .then((id) => resolve(id))
        .catch((error) => reject(error))
    })
  }

  update (where, payload) {
    return new Promise((resolve, reject) => {
      this.pg(this.table)
        .where(where)
        .update(payload)
        .then((result) => {
          resolve(result)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}

module.exports = BaseRepository
