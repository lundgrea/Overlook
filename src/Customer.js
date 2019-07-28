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

  }
  gatherBookingInformation() {
    this.bookings = this.masterBookings.filter(booking => this.id === booking.userID);
  }

  gatherOrderInformation() {
    this.orders = this.masterOrders.filter(order => this.id === order.userID)
  }

  displayBookings() {
    this.bookings.map(booking => domUpdates.displayCustomerBookings(booking))
  }

  updateBooking() {
  }

  cancelBooking() {
  }

  addBooking() {
  }


}


export default Customer;