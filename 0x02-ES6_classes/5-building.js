/**
 * Represents a building.
 * @class
 */
export default class Building {
  /**
   * Create a Building instance.
   *
   * @param {number} sqft - The square footage of the building.
   * @throws {Error} Throws an error if an attempt is made to instantiate Building directly.
   */
  constructor(sqft) {
    // Ensure the sqft is a number
    if (typeof sqft !== 'number') {
      throw new TypeError('sqft must be a number');
    }

    // Prevent direct instantiation of Building
    if (new.target === Building) {
      throw new Error('Cannot instantiate Building directly');
    }

    this._sqft = sqft;
  }

  /**
   * Getter for the square footage.
   *
   * @returns {number} The square footage of the building.
   */
  get sqft() {
    return this._sqft;
  }

  /**
   * Abstract method that must be implemented by subclasses.
   *
   * @throws {Error} If this method is not implemented by a subclass.
   */
  evacuationWarningMessage() {
    throw new Error(
      'Class extending Building must override evacuationWarningMessage'
    );
  }
}
