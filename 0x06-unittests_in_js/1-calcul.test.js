const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM operation', () => {
    it('should correctly sum rounded numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
      assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
      assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
      assert.strictEqual(calculateNumber('SUM', -1.6, -1.7), -4);
    });
  });

  describe('SUBTRACT operation', () => {
    it('should correctly subtract rounded numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
      assert.strictEqual(calculateNumber('SUBTRACT', 3.7, 1.2), 3);
      assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 3.7), -2);
      assert.strictEqual(calculateNumber('SUBTRACT', -1.6, -1.7), 0);
    });
  });

  describe('DIVIDE operation', () => {
    it('should correctly divide rounded numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
      assert.strictEqual(calculateNumber('DIVIDE', 4.0, 2.0), 2);
      assert.strictEqual(calculateNumber('DIVIDE', 1.7, 1.5), 1);
      assert.strictEqual(calculateNumber('DIVIDE', 8.0, 2.0), 4);
    });

    it('should return "Error" when dividing by zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', 8.0, 0.2), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', -7.0, 0.4), 'Error');
    });
  });

  describe('Invalid type handling', () => {
    it('should throw error for invalid operation type', () => {
      assert.throws(() => calculateNumber('INVALID', 1.4, 4.5), Error);
    });
  });

  describe('Edge cases', () => {
    it('should handle very large numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 999999.5, 999999.5), 2000000);
      assert.strictEqual(calculateNumber('SUBTRACT', 999999.5, 999999.5), 0);
      assert.strictEqual(calculateNumber('DIVIDE', 999999.5, 999999.5), 1);
    });

    it('should handle negative numbers', () => {
      assert.strictEqual(calculateNumber('SUM', -1.4, -4.5), -5);
      assert.strictEqual(calculateNumber('SUBTRACT', -1.4, -4.5), 3);
      assert.strictEqual(calculateNumber('DIVIDE', -1.4, -4.5), 0.25);
    });

    it('should handle zero values correctly', () => {
      assert.strictEqual(calculateNumber('SUM', 0, 0), 0);
      assert.strictEqual(calculateNumber('SUBTRACT', 0, 0), 0);
      assert.strictEqual(calculateNumber('DIVIDE', 0, 2.7), 0);
    });

    it('should handle floating point precision', () => {
      assert.strictEqual(calculateNumber('SUM', 1.3, 2.3), 3);
      assert.strictEqual(calculateNumber('SUBTRACT', 2.7, 2.7), 0);
      assert.strictEqual(calculateNumber('DIVIDE', 3.7, 2.0), 2); // Updated test case
    });
  });
});
