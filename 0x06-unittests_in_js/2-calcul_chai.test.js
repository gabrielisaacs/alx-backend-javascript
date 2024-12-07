const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('SUM operation', () => {
    it('should correctly sum rounded numbers', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
      expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
      expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
      expect(calculateNumber('SUM', -1.6, -1.7)).to.equal(-4);
    });
  });

  describe('SUBTRACT operation', () => {
    it('should correctly subtract rounded numbers', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
      expect(calculateNumber('SUBTRACT', 3.7, 1.2)).to.equal(3);
      expect(calculateNumber('SUBTRACT', 1.5, 3.7)).to.equal(-2);
      expect(calculateNumber('SUBTRACT', -1.6, -1.7)).to.equal(0);
    });
  });

  describe('DIVIDE operation', () => {
    it('should correctly divide rounded numbers', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
      expect(calculateNumber('DIVIDE', 4.0, 2.0)).to.equal(2);
      expect(calculateNumber('DIVIDE', 1.7, 1.5)).to.equal(1);
      expect(calculateNumber('DIVIDE', 8.0, 2.0)).to.equal(4);
    });

    it('should return "Error" when dividing by zero', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
      expect(calculateNumber('DIVIDE', 8.0, 0.2)).to.equal('Error');
      expect(calculateNumber('DIVIDE', -7.0, 0.4)).to.equal('Error');
    });
  });

  describe('Invalid type handling', () => {
    it('should throw error for invalid operation type', () => {
      expect(() => calculateNumber('INVALID', 1.4, 4.5)).to.throw();
    });
  });

  describe('Edge cases', () => {
    it('should handle very large numbers', () => {
      expect(calculateNumber('SUM', 999999.5, 999999.5)).to.equal(2000000);
      expect(calculateNumber('SUBTRACT', 999999.5, 999999.5)).to.equal(0);
      expect(calculateNumber('DIVIDE', 999999.5, 999999.5)).to.equal(1);
    });

    it('should handle negative numbers', () => {
      expect(calculateNumber('SUM', -1.4, -4.5)).to.equal(-5);
      expect(calculateNumber('SUBTRACT', -1.4, -4.5)).to.equal(3);
      expect(calculateNumber('DIVIDE', -1.4, -4.5)).to.equal(0.25);
    });

    it('should handle zero values correctly', () => {
      expect(calculateNumber('SUM', 0, 0)).to.equal(0);
      expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0);
      expect(calculateNumber('DIVIDE', 0, 2.7)).to.equal(0);
    });

    it('should handle floating point precision', () => {
      expect(calculateNumber('SUM', 1.3, 2.3)).to.equal(3);
      expect(calculateNumber('SUBTRACT', 2.7, 2.7)).to.equal(0);
      expect(calculateNumber('DIVIDE', 3.7, 2.0)).to.equal(2);
    });
  });
});
