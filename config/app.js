const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
const environment = process.env.NODE_ENV || 'development'
const routes = require('../app/routes')
const { getErrorResponse } = require('../app/middleware/handler/error')

// Testing DB Connection
const DBConnection = require('../app/config/database/connection')
const pgql = new DBConnection().getInstance()

module.exports = express => {
  const app = express()

  app.locals.ENV = environment
  app.locals.ENV_DEVELOPMENT = environment === 'development'

  app.use(cors({ origin: true }))
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(helmet())

  app.use((req, res, next) => {
    console.info({
      message: 'incoming-request'
    })

    return pgql
      .raw('SELECT 1+1 AS result')
      .then(() => next())
      .catch(error => next(error))
  })

  routes(app)

  app.use(require('../app/middleware/handler/not_found'))
  app.use(async (err, req, res, next) => {
    const response = getErrorResponse(err)
    const httpStatus = response.status

    delete response.status

    return res.status(httpStatus).json(response)
  })

  return app
}
