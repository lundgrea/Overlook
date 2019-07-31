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
    this.allTimeTotalRoomServiceCharges = null;
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
    } else {
      this.bookings.map(booking => domUpdates.displayCustomerBookings(booking))
    }
  }

  displayOrders() {
    if (this.orders.length === 0) {
      domUpdates.displayNoOrderMessage(this.name);
    } else {
      this.orders.map(order => domUpdates.displayCustomerOrders(order));
    }
  }

  checkBookingsForToday() {
    this.todaysBooking = this.bookings.filter(booking => {
      return booking.date == this.unformattedDate
    })
    if (this.todaysBooking.length === 0) {
      domUpdates.displayPromptToBookTonight(this.name);
    }
    return this.todaysBookings
  }

  calculateRoomServiceTotal() {
    if (this.orders.length === 0) {
      domUpdates.displayNoOrderCostForCustomer(this.name);
    } else {
      this.allTimeTotalRoomServiceCharges = this.orders.reduce((total, order) => {
        total = total + order.totalCost
        return total
      }, 0)
      domUpdates.displayAllTimeOrderCostForCustomer(this.allTimeTotalRoomServiceCharges);
    }
  }

  calculateRoomServiceToday() {
    this.todaysOrder = this.orders.find(order => this.unformattedDate === order.date)
    if(this.todaysOrder === undefined){
      domUpdates.displayNoOrderCostToday(this.name)
    } else {
    domUpdates.displayOrdersTodayTotalCost(this.todaysOrder.totalCost)
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