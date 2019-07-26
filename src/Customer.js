import $ from 'jquery';
import testUsers from '../src/users-test-data';

class Customer {
  constructor(user) {
    this.name = user.name;
  }
}


export default Customer;