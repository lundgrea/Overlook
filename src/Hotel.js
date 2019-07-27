import $ from 'jquery';

import testUsers from '../src/users-test-data';
import testRooms from '../src/rooms-test-data';
import testRoomServices from '../src/roomServices-test-data';
import testBookings from '../src/bookings-test-data';
import Customer from '../src/Customer';
import Booking from '../src/Booking';
import RoomService from '../src/RoomService';

class Hotel {
  constructor(date, customers, rooms, bookings, orders) {
    this.date = date;
    this.allCustomers = customers;
    this.allRooms = rooms;
    this.allBookings = bookings;
    this.allRoomServiceOrders = orders;
    this.currentCustomer = {};
    this.todaysBookings = [];
    this.todaysAvailableRoomCount = null;
    this.percentageOccupied = null;
  }

  grandOpening() {
  }

  
  findCustomer(ID) {
    this.currentCustomer = this.allCustomers.filter(customer => customer.id === ID)
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

  calculateRevenueToday() {
    //display within home page
  }

  calculateOrdersToday() {
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