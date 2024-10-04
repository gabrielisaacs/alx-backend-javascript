/**
 * Represents a pricing structure with an amount and a currency.
 *
 * @class
 * @param {number} amount - The amount of money.
 * @param {Currency} currency - The currency associated with the amount.
 */
import Currency from './3-currency.js';
export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  /**
   * Gets the amount of money.
   *
   * @returns {number} The amount.
   */
  get amount() {
    return this._amount;
  }

  /**
   * Sets the amount of money.
   *
   * @param {number} value - The amount of money.
   * @throws {TypeError} Throws an error if the value is not a number.
   */
  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = value;
  }

  /**
   * Gets the currency associated with the amount.
   *
   * @returns {Currency} The currency.
   */
  get currency() {
    return this._currency;
  }

  /**
   * Sets the currency associated with the amount.
   *
   * @param {Currency} value - The currency.
   * @throws {TypeError} Throws an error if the value is not a Currency instance.
   */
  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('Currency must be an instance of Currency');
    }
    this._currency = value;
  }

  /**
   * Returns the full price in the format 'amount currency_name (currency_code)'.
   *
   * @returns {string} The formatted price string.
   */
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  /**
   * Converts the price using a given conversion rate.
   *
   * @static
   * @param {number} amount - The amount to convert.
   * @param {number} conversionRate - The rate to use for conversion.
   * @returns {number} The converted amount.
   */
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
