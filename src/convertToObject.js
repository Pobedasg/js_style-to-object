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
    .reduce((cssObject, trimmedRule) => {
      const ruleParts = trimmedRule.split(':');

      cssObject[ruleParts[0].trim(' ')] = ruleParts[1].trim(' ');

      return cssObject;
    }, {});
}

module.exports = convertToObject;
