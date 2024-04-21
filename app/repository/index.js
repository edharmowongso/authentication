const fs = require('fs')

class RepostitoryManager {
  getRepository (repo) {
    const repoPath = './app/repository/'

    if (!fs.existsSync(`${repoPath}${repo}Repository.js`)) {
      const BaseRepository = require('./BaseRepository.js')
      return new BaseRepository(`${repo}`)
    }

    const Entity = require(`./${repo}Repository.js`)
    return new Entity(`${repo}`)
  }
}

module.exports = RepostitoryManager
