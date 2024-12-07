const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('should stub Utils.calculateNumber and verify console.log', () => {
    // Create a stub for Utils.calculateNumber
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber');
    // Make the stub always return 10
    calculateNumberStub.returns(10);

    // Create a spy for console.log
    const consoleSpy = sinon.spy(console, 'log');

    // Call the function we want to test
    sendPaymentRequestToApi(100, 20);

    // Verify the stub was called with correct arguments
    expect(calculateNumberStub.calledOnceWith('SUM', 100, 20)).to.be.true;

    // Verify console.log was called with correct message
    expect(consoleSpy.calledOnceWith('The total is: 10')).to.be.true;

    // Restore both the stub and the spy
    calculateNumberStub.restore();
    consoleSpy.restore();
  });
});
