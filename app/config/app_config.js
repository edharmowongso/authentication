let config = {
  application: {
    environment: process.env.NODE_ENV
  },
  database: {
    uri: process.env.DATABASE_URL,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT || 3306,
    timezone: process.env.TZ,
  },
}

const appConfig = {
  getConfig (environment = process.env.NODE_ENV) {
    switch (environment) {
      case 'staging':
        return Object.freeze(config)
      default:
        return Object.freeze(config)
    }
  }
}

module.exports = appConfig.getConfig()
