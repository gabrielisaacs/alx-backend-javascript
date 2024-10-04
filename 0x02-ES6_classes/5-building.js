/**
 * Represents a building with a specified square footage.
 *
 * @class
 * @param {number} sqft - The square footage of the building.
 * @throws {Error} Throws an error if an extending class does not implement the evacuationWarningMessage method.
 */
export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (new.target === Building) {
      throw new Error('Cannot instantiate an abstract class');
    }
  }

  /**
   * Gets the square footage of the building.
   *
   * @returns {number} The square footage.
   */
  get sqft() {
    return this._sqft;
  }

  /**
   * Abstract method that must be implemented by any class extending Building.
   *
   * @abstract
   * @throws {Error} Throws an error if this method is not implemented in a subclass.
   */
  evacuationWarningMessage() {
    throw new Error(
      'Class extending Building must override evacuationWarningMessage'
    );
  }
}
