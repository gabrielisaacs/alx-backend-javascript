// Import Car class
import Car from './10-car.js';

/**
 * Represents an Electric Vehicle Car (EVCar).
 *
 * @class
 * @extends Car
 */
export default class EVCar extends Car {
  /**
   * Create a new EVCar instance.
   *
   * @param {string} brand - The brand of the car.
   * @param {string} motor - The type of motor in the car.
   * @param {string} color - The color of the car.
   * @param {string} range - The driving range of the car.
   */
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  /**
   * Clone the EVCar object but return a Car object for privacy.
   *
   * @returns {Car} A new instance of the Car class.
   */
  cloneCar() {
    // Return a new instance of Car instead of EVCar
    return new Car(this._brand, this._motor, this._color);
  }
}
