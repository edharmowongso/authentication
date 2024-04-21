const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
const environment = process.env.NODE_ENV || 'development'

module.exports = express => {
  const app = express()

  app.locals.ENV = environment
  app.locals.ENV_DEVELOPMENT = environment === 'development'

  app.use(cors())
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(helmet())

  app.get('/', (req, res) => {
    res.json({
      status: 'OK'
    })
  })

  return app
}
