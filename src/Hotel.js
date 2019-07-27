import $ from 'jquery';

import testUsers from '../src/users-test-data';
import testRooms from '../src/rooms-test-data';
import testRoomServices from '../src/roomServices-test-data';
import testBookings from '../src/bookings-test-data';
import Customer from '../src/Customer';
import Booking from '../src/Booking';
import RoomService from '../src/RoomService';

class Hotel {
  constructor(data) {
    this.allCustomers = data.users;
    this.allBookings = data.bookings;
    this.allRooms = data.rooms;
    this.allRoomServiceOrders = data.roomService;
    this.date = null;
    this.currentCustomer = {};
    this.todaysBookings = [];
    this.todaysAvailableRoomCount = null;
    this.todaysPercentageOccupied = null;
    this.todaysTotalOrderRevenue = null;
  }

  grandOpening() {
    this.getToday();
    this.findBookedRooms(this.date);
    this.findNumberRoomsAvailable();
    this.calculatePercentageOccupancy()
    this.calculateOrdersToday(this.date);
  }

  getToday() {
    this.date = new Date().toLocaleDateString();
  }

  findBookedRooms(theDate) {
    this.todaysBookings = this.allBookings.filter(booking => booking.date === theDate)
  }

  findNumberRoomsAvailable() {
    this.todaysAvailableRoomCount = this.allRooms.length - this.todaysBookings.length
  }

  calculatePercentageOccupancy() {
    this.percentageOccupied = (this.todaysBookings.length / this.allRooms.length) * 100
  }

  findCustomer(ID) {
    this.currentCustomer = this.allCustomers.filter(customer => customer.id === ID)
  }

  calculateOrdersToday(theDate) {
    let todaysOrders = this.allRoomServiceOrders.filter(order => order.date === theDate)
    let totalOrderPrices = todaysOrders.map(order => order.totalCost)
    this.todaysTotalOrderRevenue = totalOrderPrices.reduce((total, item) => {
      return total += item
    }, 0).toFixed(2)
  }

  calculateRevenueToday() {
    //display within home page
  }


  selectCustomer(name) {
  }

  addNewCustomer(name) {
  }

  createNewBooking() {
  }

  createNewRoomServiceOrder() {
  }

  displayTodayRoomServiceOrders(date) {
  }

  searchRoomServiceOrdersByDate(date) {
  }




}


export default Hotel;