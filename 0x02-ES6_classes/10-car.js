const _clone = Symbol('clone');

/**
 * Represents a Car.
 *
 * @class
 */
export default class Car {
  /**
   * Create a new Car instance.
   *
   * @param {string} brand - The brand of the car.
   * @param {string} motor - The type of motor in the car.
   * @param {string} color - The color of the car.
   */
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  /**
   * Clone the current Car object.
   *
   * @returns {Car} A new instance of the Car class with the same attributes.
   */
  cloneCar() {
    // Use the _clone symbol to return a new object of the same class
    const ClonedCar = Object.getPrototypeOf(this).constructor;
    return new ClonedCar(this._brand, this._motor, this._color);
  }
}
