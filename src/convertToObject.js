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
      const [property, value] = trimmedRule.split(':');

      cssObject[property.trim(' ')] = value.trim(' ');

      return cssObject;
    }, {});
}

module.exports = convertToObject;
