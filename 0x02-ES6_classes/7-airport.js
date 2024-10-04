/**
 * Represents an Airport.
 *
 * @class
 */
export default class Airport {
  /**
   * Create an Airport instance.
   *
   * @param {string} name - The name of the airport.
   * @param {string} code - The IATA code of the airport.
   */
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  /**
   * Override the default string representation of the Airport.
   *
   * @returns {string} The IATA code of the airport.
   */
  toString() {
    return `[object ${this._code}]`;
  }
}
