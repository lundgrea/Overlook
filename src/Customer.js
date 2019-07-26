import $ from 'jquery';
import testUsers from '../src/users-test-data';

class Customer {
  constructor(user) {
    this.id = user.id
    this.name = user.name;
  }

  displayCustomerInformation() {
  }

}


export default Customer;