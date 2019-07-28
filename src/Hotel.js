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
    this.todaysOrders = null
    this.todaysTotalOrderRevenue = null;
    this.todaysTotalRevenue = null;
    this.bestDay = null;
  }

  grandOpening() {
    this.getToday();
    this.findBookedRooms(this.date);
    this.findNumberRoomsAvailable();
    this.calculatePercentageOccupancy()
    this.calculateOrdersToday(this.date);
    this.calculateRevenueToday(this.date)
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
    this.todaysPercentageOccupied = ((this.todaysBookings.length / this.allRooms.length) * 100).toFixed()
  }

  findCustomerById(ID) {
    this.currentCustomer = this.allCustomers.filter(customer => customer.id === ID)
  }

  findCustomerByName(theName) {
    this.currentCustomer = this.allCustomers.find(person => person.name.toUpperCase() === theName.toUpperCase())
  }

  calculateOrdersToday(theDate) {
    this.todaysOrders = this.allRoomServiceOrders.filter(order => order.date === theDate)
    let totalOrderPrices = this.todaysOrders.map(order => order.totalCost)
    this.todaysTotalOrderRevenue = totalOrderPrices.reduce((total, item) => {
      return total += item
    }, 0).toFixed(2)
  }

  calculateRevenueToday(theDate) {
    let todaysRentedRooms = this.allBookings.filter(booking => booking.date === theDate)
    let todaysRentedRoomNumbers = todaysRentedRooms.map(room => room.roomNumber)
    let roomRentalIncome = todaysRentedRoomNumbers.reduce((total, roomNumber) => {
      this.allRooms.forEach(room => {
        if(roomNumber === room.number) {
          total += room.costPerNight
        }
      })
      return total
    }, 0)
    this.todaysTotalRevenue = Number(roomRentalIncome) + Number(this.todaysTotalOrderRevenue)
    this.todaysTotalRevenue = this.todaysTotalRevenue.toFixed(2)
  }

  findBestDay() { 
    let bestDayList = this.allBookings.reduce((total, booking) => {
      if(!total[booking.date]) {
        total[booking.date] = 1
      } else {
        total[booking.date] += 1
      }
      return total
    }, {})
    let keys = bestDayList
    this.bestDay = Object.keys(bestDayList).reduce((a, b) => bestDayList[a] > bestDayList[b] ? a : b)
    console.log(this.bestDay)
  }

  findWorstDay() {

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