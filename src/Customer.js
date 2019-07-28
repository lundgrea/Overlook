import $ from 'jquery';
import testUsers from '../src/users-test-data';
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

  gatherBookingInformation() {
    this.bookings = this.masterBookings.filter(booking => this.id === booking.userID)
  }

  gatherOrderInformation() {
    this.orders = this.masterOrders.filter(order => this.id === order.userID)
  }

  updateBooking() {
  }

  cancelBooking() {
  }

  addBooking() {
  }


}


export default Customer;