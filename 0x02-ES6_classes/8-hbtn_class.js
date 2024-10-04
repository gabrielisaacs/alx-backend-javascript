/**
 * Represents a HolbertonClass.
 *
 * @class
 */
export default class HolbertonClass {
  /**
   * Create a HolbertonClass instance.
   *
   * @param {number} size - The size of the class.
   * @param {string} location - The location of the class.
   */
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  /**
   * When cast to a Number, returns the size.
   *
   * @returns {number} The size of the class.
   */
  valueOf() {
    return this._size;
  }

  /**
   * When cast to a String, returns the location.
   *
   * @returns {string} The location of the class.
   */
  toString() {
    return this._location;
  }
}
