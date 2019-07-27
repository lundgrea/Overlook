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
    this.percentageOccupied = null;
  }

  grandOpening() {
    getToday();
    console.log('grandOpening date' , this.date)
    findBookedRooms(this.date);
    console.log('grandOpening bookings', this.todaysBookings)
    findNumberRoomsAvailable();
    console.log('grandOpening availabilties', this.todaysAvailableRoomCount)
    calculatePercentageOccupancy()
    console.log('grandOpening occupancy', this.percentageOccupied)
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