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
    this.unformattedDate = null;
    this.todaysBooking = {};
    this.todaysOrder = {};
    this.totalRoomServiceCharges = null;
  }

  customerHandler() {
    this.getToday();
    this.unformatDate(this.date);
    this.gatherBookingInformation();
    this.gatherOrderInformation();
    this.displayBookings();
    this.displayOrders();
    this.checkBookingsForToday();
    this.calculateRoomServiceTotal();
    this.calculateRoomServiceToday();
  }

  getToday() {
    this.date = new Date().toLocaleDateString();
  }

  unformatDate(date) {
    let dateArray = date.split('/')
    let day = dateArray[1];
    let month = dateArray[0];
    let year = dateArray[2];
    if (month <= 9) {
      var theUnformattedDate = `${year}/0${month}/${day}`;
      this.unformattedDate = theUnformattedDate
    } else {
      var theLaterUnformattedDate = `${year}/${month}/${day}`
      this.unformattedDate = theLaterUnformattedDate
    }
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
    } else {
      this.orders.map(order => domUpdates.displayCustomerOrders(order))
    }
  }

  checkBookingsForToday() {
    console.log(this.bookings)
    this.todaysBooking = this.bookings.find(booking => booking.date === this.unformattedDate)
    console.log(this.todaysBookings)
    if (this.todaysBookings === undefined) {
      console.log('no bookings for today')
      domUpdates.displayPromptToBookTonight(this.name)
    }
    return this.todaysBookings
  }

  calculateRoomServiceTotal() {
  //   this.totalRoomServiceCharges = 
  }

  calculateRoomServiceToday() {
  //   this.todaysOrder = this.orders.find(order => this.unformatted date === order.date)
  }

  updateBooking() {
  }

  cancelBooking() {
  }

  addBooking() {
  }


}


export default Customer;