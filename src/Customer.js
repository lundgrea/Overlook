import $ from 'jquery';
import testUsers from '../src/users-test-data';
import Hotel from '../src/Hotel'


class Customer {
  constructor(user) {
    this.id = user.id
    this.name = user.name;
  }

  displayCustomerInformation() {
  }

  updateBooking() {
  }

  cancelBooking() {
  }

  addBooking() {
  }


}


export default Customer;