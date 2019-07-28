import $ from 'jquery';
import testUsers from '../src/users-test-data';
import domUpdates from '../src/domUpdates'
import Hotel from '../src/Hotel'


class Customer {
  constructor(user, allBookings, allOrders) {
    this.id = user.id
    this.name = user.name;
    this.masterBookings = allBookings;
    this.masterOrders = allOrders;
    this.bookings = [];
    this.orders = [];
  }

  customerHandler() {
    this.gatherBookingInformation();
    this.gatherOrderInformation();
    this.displayBookings();
    this.displayOrders();

  }
  gatherBookingInformation() {
    this.bookings = this.masterBookings.filter(booking => this.id === booking.userID);
  }

  gatherOrderInformation() {
    this.orders = this.masterOrders.filter(order => this.id === order.userID)
  }

  displayBookings() {
    if(this.bookings.length === 0) {
      domUpdates.displayNoBookingsMessage(this.name)
      //   console.log(TEST THIS WITH NEW USER)    //
    } else {
      this.bookings.map(booking => domUpdates.displayCustomerBookings(booking))
    }
  }

  displayOrders() {
    if (this.orders.length === 0) {
      domUpdates.displayNoOrderMessage(this.name)
      //   console.log(TEST THIS WITH NEW USER)    //
    } else {
      this.orders.map(order => domUpdates.displayCustomerOrders(order))
    }
  }

  updateBooking() {
  }

  cancelBooking() {
  }

  addBooking() {
  }


}


export default Customer;