// Import Building class
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
    // Call parent class constructor with sqft
    super(sqft);
    this._floors = floors;
  }

  /**
   * Getter for floors.
   *
   * @returns {number} The number of floors in the building.
   */
  get floors() {
    return this._floors;
  }

  /**
   * Override of the evacuationWarningMessage method.
   *
   * @returns {string} The evacuation warning message.
   */
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors.`;
  }
}
