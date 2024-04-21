const { vsprintf } = require('sprintf-js')

function customBodyParserError (error) {
  if (['entity.parse.failed'].includes(error.type)) {
    return {
      status: 400,
      errorType: 'invalid_body'
    }
  }

  if (error instanceof URIError) {
    return {
      status: 400,
      errorType: 'invalid_uri'
    }
  }

  return null
}

function getErrorResponse (err) {
  console.error('Handler::Error', err)

  if (!err.errorForm && !err.errorType) {
    const customErr = customBodyParserError(err)

    if (customErr) {
      return {
        status: customErr.status,
        message: customErr.errorMessage,
        type: customErr.errorType
      }
    }

    return {
      status: 500,
      type: 'unknown_error'
    }
  }

  if (err.errorForm) {
    return {
      status: 422,
      message: err.errorMessage || 'Something wrong. Please check again your data',
      type: err.errorType,
      errors: err.errorForm
    }
  }

  const type = err.errorType
  const args = err.errorArgs || []
  const messageTypeUndefined = `Error message not defined (${type})`

  return {
    status: 422,
    message: Error[type] ? vsprintf(Error[type], args) : messageTypeUndefined,
    type,
    data: err.errorData
  }
}

module.exports = { getErrorResponse }
