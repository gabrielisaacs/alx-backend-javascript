const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  const API_URL = 'http://localhost:7865';

  it('should return correct status code', (done) => {
    request.get(API_URL, (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return correct result', (done) => {
    request.get(API_URL, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart page', () => {
  const API_URL = 'http://localhost:7865';

  it('should return correct status code when :id is a number', (done) => {
    request.get(`${API_URL}/cart/12`, (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return correct result when :id is a number', (done) => {
    request.get(`${API_URL}/cart/12`, (error, response, body) => {
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return 404 when :id is NOT a number', (done) => {
    request.get(`${API_URL}/cart/hello`, (error, response) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});

describe('Available payments page', () => {
  const API_URL = 'http://localhost:7865';

  it('should return correct status code', (done) => {
    request.get(`${API_URL}/available_payments`, (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return correct payment methods object', (done) => {
    request.get(`${API_URL}/available_payments`, (error, response, body) => {
      const expectedPayment = {
        payment_methods: {
          credit_cards: true,
          paypal: false,
        },
      };
      expect(JSON.parse(body)).to.deep.equal(expectedPayment);
      done();
    });
  });
});

describe('Login page', () => {
  const API_URL = 'http://localhost:7865';

  it('should return correct status code', (done) => {
    request.post(
      `${API_URL}/login`,
      {
        json: { userName: 'Betty' },
      },
      (error, response) => {
        expect(response.statusCode).to.equal(200);
        done();
      }
    );
  });

  it('should return correct welcome message', (done) => {
    request.post(
      `${API_URL}/login`,
      {
        json: { userName: 'Betty' },
      },
      (error, response, body) => {
        expect(body).to.equal('Welcome Betty');
        done();
      }
    );
  });

  it('should handle missing userName', (done) => {
    request.post(
      `${API_URL}/login`,
      {
        json: {},
      },
      (error, response, body) => {
        expect(body).to.equal('Welcome undefined');
        done();
      }
    );
  });
});
