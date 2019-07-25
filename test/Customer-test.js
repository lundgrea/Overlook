import chai from 'chai';
const expect = chai.expect;

import Customer from '../src/Customer';
import users from '../test/users-test-data';


var customer1, customer2;

beforeEach(() => {
  customer1 = new Customer(users.users[0])
  customer2 = new Customer(users.users[1])
});

describe('Customer', function() {

  it('should be a function', function() {
    expect(Customer).to.be.a('function');
  });

  it('should be an instance of Customer', function() {
    expect(customer1).to.be.an.instanceof(Customer);
  });

  it('should have a name', function() {
    expect(customer1.name).to.equal('Matilde Larson')
    expect(customer2.name).to.equal('Chadrick Lowe')
  });

});