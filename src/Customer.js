import $ from 'jquery';
import users from '../test/users-test-data'

class Customer {
  constructor(user) {
    this.name = user.name;
  }
}


export default Customer;