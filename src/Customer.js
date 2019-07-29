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
    this.date = null;
    this.todaysBooking = {};
  }

  customerHandler() {
    this.getToday()
    this.gatherBookingInformation();
    this.gatherOrderInformation();
    this.displayBookings();
    this.displayOrders();
    this.checkBookingsForToday(this.date)
  }

  getToday() {
    this.date = new Date().toLocaleDateString();
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

  checkBookingsForToday(today) {
    this.todaysBooking = this.bookings.find(booking => booking.date === today)
    if (this.todaysBookings === undefined) {
      console.log('no bookings for today')
      domUpdates.displayPromptToBookTonight(this.name)
    }
    return this.todaysBookings
  }

  updateBooking() {
  }

  cancelBooking() {
  }

  addBooking() {
  }


}


export default Customer;