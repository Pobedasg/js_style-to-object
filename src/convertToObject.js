'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((cssRule) => cssRule.trim())
    .filter((trimmedRule) => trimmedRule !== '')
    .reduce((acumulator, trimmedRule) => {
      const ruleParts = trimmedRule.split(':');

      acumulator[ruleParts[0].trim(' ')] = ruleParts[1].trim(' ');

      return acumulator;
    }, {});
}

module.exports = convertToObject;
