import chai from 'chai';
const expect = chai.expect;

import Customer from '../src/Customer';
import testUsers from '../src/users-test-data';

let customer1, customer2

beforeEach(() => {
  customer1 = new Customer(testUsers.users[0])
  customer2 = new Customer(testUsers.users[1])
});

describe('Customer', function() {

  it('should be a function', function() {
    expect(Customer).to.be.a('function');
  });

  it('should be an instance of Customer', function() {
    expect(customer1).to.be.an.instanceof(Customer);
  });

  it('should have an ID', function() {
    expect(customer1.id).to.equal(1)
    expect(customer2.id).to.equal(2)
  });

  it('should have a name', function() {
    expect(customer1.name).to.equal('Matilde Larson')
    expect(customer2.name).to.equal('Chadrick Lowe')
  });

});