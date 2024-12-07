const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;

  // Hook that runs before each test
  beforeEach(() => {
    // Create a spy on console.log before each test
    consoleSpy = sinon.spy(console, 'log');
  });

  // Hook that runs after each test
  afterEach(() => {
    // Restore the spy after each test
    consoleSpy.restore();
  });

  it('should log "The total is: 120" when called with 100 and 20', () => {
    // Call the function with 100 and 20
    sendPaymentRequestToApi(100, 20);

    // Verify console.log was called with the correct string
    expect(consoleSpy.calledOnceWith('The total is: 120')).to.be.true;
    // Verify console.log was only called once
    expect(consoleSpy.calledOnce).to.be.true;
  });

  it('should log "The total is: 20" when called with 10 and 10', () => {
    // Call the function with 10 and 10
    sendPaymentRequestToApi(10, 10);

    // Verify console.log was called with the correct string
    expect(consoleSpy.calledOnceWith('The total is: 20')).to.be.true;
    // Verify console.log was only called once
    expect(consoleSpy.calledOnce).to.be.true;
  });
});
