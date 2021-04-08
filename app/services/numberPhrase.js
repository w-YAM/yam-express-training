const httpClient = require('../helpers/httpClient');
const logger = require('../logger');
const { noFoundError } = require('../errors');

const API_URL = 'http://numbersapi.com';

// eslint-disable-next-line consistent-return
const getNumberPhrase = async (number = 'random', type = '') => {
  try {
    const typePrefix = type ? '/' : '';
    const url = `${API_URL}/${number}${typePrefix}${type}`;

    return await httpClient('get', url);
  } catch (error) {
    logger.error(error);
    noFoundError(error.message);
  }
};

module.exports = { getNumberPhrase };
