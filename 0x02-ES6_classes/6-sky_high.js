// Importing the Building class
import Building from './5-building.js';

/**
 * Represents a SkyHighBuilding.
 *
 * @class
 * @extends Building
 */
export default class SkyHighBuilding extends Building {
  /**
   * Create a SkyHighBuilding instance.
   *
   * @param {number} sqft - The square footage of the building.
   * @param {number} floors - The number of floors in the building.
   */
  constructor(sqft, floors) {
    // Call the parent class constructor with sqft
    super(sqft);
    this._floors = floors; // Store the floors attribute
  }

  /**
   * Getter for the number of floors.
   *
   * @returns {number} The number of floors in the building.
   */
  get floors() {
    return this._floors;
  }

  /**
   * Override of the evacuationWarningMessage method.
   *
   * @returns {string} The evacuation warning message for the building.
   */
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors.`;
  }
}
