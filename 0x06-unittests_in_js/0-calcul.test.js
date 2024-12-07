const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return sum of rounded numbers', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
    assert.strictEqual(calculateNumber(1, 3.7), 5);
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should handle negative numbers', () => {
    assert.strictEqual(calculateNumber(-1.6, -1.7), -4);
    assert.strictEqual(calculateNumber(-1.4, -1.3), -2);
  });

  it('should handle zero values', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
    assert.strictEqual(calculateNumber(0.1, 0.2), 0);
    assert.strictEqual(calculateNumber(0.8, 0.7), 2);
  });

  it('should handle large numbers', () => {
    assert.strictEqual(calculateNumber(999999.5, 999999.5), 2000000);
    assert.strictEqual(calculateNumber(10.1, 10.2), 20);
  });

  it('should round correctly at .5', () => {
    assert.strictEqual(calculateNumber(1.5, 2.5), 5);
    assert.strictEqual(calculateNumber(2.5, 2.5), 6);
    assert.strictEqual(calculateNumber(3.5, 3.5), 8);
  });

  it('should handle floating point precision', () => {
    assert.strictEqual(calculateNumber(1.3456789, 2.3456789), 3);
    assert.strictEqual(calculateNumber(2.6999999, 2.7), 6);
  });
});
