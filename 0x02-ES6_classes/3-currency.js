/**
 * Represents a currency with a code and name.
 *
 * @class
 * @param {string} code - The code of the currency (e.g., "$").
 * @param {string} name - The name of the currency (e.g., "Dollars").
 */
export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  /**
   * Gets the currency code.
   *
   * @returns {string} The currency code.
   */
  get code() {
    return this._code;
  }

  /**
   * Sets the currency code.
   *
   * @param {string} value - The currency code.
   * @throws {TypeError} Throws an error if the value is not a string.
   */
  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = value;
  }

  /**
   * Gets the currency name.
   *
   * @returns {string} The currency name.
   */
  get name() {
    return this._name;
  }

  /**
   * Sets the currency name.
   *
   * @param {string} value - The currency name.
   * @throws {TypeError} Throws an error if the value is not a string.
   */
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /**
   * Returns the full currency in the format 'name (code)'.
   *
   * @returns {string} The formatted currency string.
   */
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
