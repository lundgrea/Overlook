import chai from 'chai';
const expect = chai.expect;

import Customer from '../src/Customer';

var customer

beforeEach(() => {
  customer = new Customer
});

describe('Customer', function() {

  it('should be a function', function() {
    expect(Customer).to.be.a('function');
  });

  it('should be an instance of Customer', function() {
    expect(customer).to.be.an.instanceof(Customer);
  });

  // it('should have a name', function() {
  //   expect(player1.name).to.equal('John')
  // });

  // it('should start with a score of 100', function() {
  //   expect(player1.score).to.equal(100)
  // })

});