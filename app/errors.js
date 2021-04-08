const internalError = (message, internalCode) => ({
  message,
  internalCode
});

exports.DATABASE_ERROR = 'database_error';
exports.databaseError = message => internalError(message, exports.DATABASE_ERROR);

exports.DEFAULT_ERROR = 'default_error';
exports.defaultError = message => internalError(message, exports.DEFAULT_ERROR);

exports.HTTP_CLIENT_ERROR = 'http_client_error';
exports.httpClientError = message => internalError(message, exports.HTTP_CLIENT_ERROR);

exports.NO_FOUND_ERROR = 'no_found_error';
exports.noFoundError = message => internalError(message, exports.NO_FOUND_ERROR);
