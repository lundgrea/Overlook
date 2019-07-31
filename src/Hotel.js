import $ from 'jquery';

import testUsers from '../src/users-test-data';
import testRooms from '../src/rooms-test-data';
import testRoomServices from '../src/roomServices-test-data';
import testBookings from '../src/bookings-test-data';
import Customer from '../src/Customer';
import Booking from '../src/Booking';
import RoomService from '../src/RoomService';
import domUpdates from '../src/domUpdates'

class Hotel {
  constructor(data) {
    this.allCustomers = data.users;
    this.allBookings = data.bookings;
    this.allRooms = data.rooms;
    this.allRoomServiceOrders = data.roomService;
    this.date = null;
    this.unformattedDate = null;
    this.currentCustomer = {};
    this.todaysBookings = [];
    this.todaysAvailableRoomCount = null;
    this.todaysAvailableRooms = null;
    this.todaysPercentageOccupied = null;
    this.todaysOrders = null
    this.todaysTotalOrderRevenue = null;
    this.todaysTotalRevenue = null;
    this.bestDay = null;
    this.worstDay = null;
    this.searchDate = null;
  }

  grandOpening() {
    this.getToday();
    this.unformatDate(this.date);
    this.findBookedRooms(this.unformattedDate);
    this.findNumberRoomsAvailable();
    this.calculatePercentageOccupancy()
    this.calculateOrdersToday(this.unformattedDate);
    this.calculateRevenueToday(this.unformattedDate);
    this.findBestDay();
    this.findWorstDay();
    this.populateTodaysOrders();
    this.findRoomsNotBookedToday();
  }

  getToday() {
    this.date = new Date().toLocaleDateString();
  }

  findBookedRooms(theDate) {
    this.todaysBookings = this.allBookings.filter(booking => booking.date === theDate);
  }

  findNumberRoomsAvailable() {
    this.todaysAvailableRoomCount = this.allRooms.length - this.todaysBookings.length;
  }

  calculatePercentageOccupancy() {
    this.todaysPercentageOccupied = ((this.todaysBookings.length / this.allRooms.length) * 100).toFixed();
  }

  findCustomerById(ID) {
    return this.allCustomers.filter(customer => {
       if (customer.id === ID) {
        this.currentCustomer = new Customer(customer, this.allBookings, this.allRoomServiceOrders);
        domUpdates.displayCustomerInfo(this.currentCustomer);
        this.currentCustomer.customerHandler();
        return this.currentCustomer;
       } else {
        domUpdates.displayNoUserByIDPrompt(ID);
        return this.customer = {};
       }
    })
  }

  findCustomerByName(theName) {
    return this.allCustomers.filter(person => {
      if (person.name.toUpperCase() === theName.toUpperCase()) {
        this.currentCustomer = new Customer(person, this.allBookings, this.allRoomServiceOrders);
        domUpdates.displayCustomerInfo(this.currentCustomer);
        this.currentCustomer.customerHandler();
        return this.currentCustomer;
      } else {
        domUpdates.displayNoUserByNamePrompt(theName);
        return this.customer = {};
      }
   })
  }

  calculateOrdersToday(theDate) {
    this.todaysOrders = this.allRoomServiceOrders.filter(order => order.date === theDate);
    let totalOrderPrices = this.todaysOrders.map(order => order.totalCost);
    this.todaysTotalOrderRevenue = totalOrderPrices.reduce((total, item) => {
      return total += item;
    }, 0).toFixed(2)
  }

  calculateRevenueToday(theDate) {
    let todaysRentedRooms = this.allBookings.filter(booking => booking.date === theDate);
    let todaysRentedRoomNumbers = todaysRentedRooms.map(room => room.roomNumber);
    let roomRentalIncome = todaysRentedRoomNumbers.reduce((total, roomNumber) => {
      this.allRooms.forEach(room => {
        if(roomNumber === room.number) {
          total += room.costPerNight;
        }
      })
      return total
    }, 0)
    this.todaysTotalRevenue = Number(roomRentalIncome) + Number(this.todaysTotalOrderRevenue);
    this.todaysTotalRevenue = this.todaysTotalRevenue.toFixed(2);
  }

  findRentalsByDay() {
    return this.allBookings.reduce((total, booking) => {
      if(!total[booking.date]) {
        total[booking.date] = 1;
      } else {
        total[booking.date] += 1;
      }
      return total;
    }, {})

  }

  findBestDay() { 
    let rentalsList = this.findRentalsByDay();
    this.bestDay = Object.keys(rentalsList).reduce((a, b) => 
        rentalsList[a] > rentalsList[b] ? a : b);
  }

  findWorstDay() {
   let rentalsList = this.findRentalsByDay();
    this.worstDay = Object.keys(rentalsList).reduce((a, b) => rentalsList[b] > rentalsList[a] ? a : b);
  }

  generateNewCustomer(nameInput) {
    let randomNumber = Math.floor(Math.random() * (50 - 1) + 100);
    this.currentCustomer = new Customer({id: randomNumber, name: nameInput}, this.allBookings, this.allRoomServiceOrders);
    this.currentCustomer.customerHandler();
    domUpdates.displayCustomerInfo(this.currentCustomer);
  }

  unformatDate(date) {
    let dateArray = date.split('/');
    let day = dateArray[1];
    let month = dateArray[0];
    let year = dateArray[2];
    if (month <= 9) {
      var unformattedDate = `${year}/0${month}/${day}`;
    } else {
      var unformattedDate = `${year}/${month}/${day}`;
    }
    this.unformattedDate = unformattedDate;
  }

  populateTodaysOrders() {
    if (this.todaysOrders.length === 0) {
      //   add error handling    //
    } else {
      this.todaysOrders.map(order => domUpdates.displayOrdersToday(order));
    }
  }

  searchRoomServiceOrdersByDate(date) {
    let daysOrders = this.allRoomServiceOrders.filter(order => order.date === date);
    if(daysOrders.length === 0) {
      domUpdates.displayNoOrdersForSelectedDate(date);
    } else {      
      domUpdates.displayDateSearchedOrders(daysOrders);
    }
  }

  searchBookingsByDate(date) {
    let daysBookings = this.allBookings.filter(booking => booking.date === date);
    if (daysBookings.length === 0) {
      domUpdates.displayNoBookingsForSelectedDate(date);
    } else {
      daysBookings.forEach(booking => domUpdates.displayDateSearchedBookings(booking));
    } 
  }
  resetCustomer() {
    this.currentCustomer = {};
  }

  findRoomsNotBookedByDate(date) {
    let daysBookings = this.allBookings.filter(booking => booking.date === date);
    let daysBookedRooms = daysBookings.map(booking => booking.roomNumber);
    let allRoomNumbers = this.allRooms.map(room => room.number);
    let availableRoomNumbers = allRoomNumbers.filter(room => {
      return daysBookedRooms.indexOf(room) < 0
      }) 
    let availableRoomsNested = availableRoomNumbers.map(number => {
      return this.allRooms.filter(room => room.number === number);
    })
    let availableRooms = availableRoomsNested.flat();
    return availableRooms;
  }

  findRoomsNotBookedToday() {
    let todaysBookings = this.allBookings.filter(booking => booking.date === this.unformattedDate);
    let todaysBookedRooms = todaysBookings.map(booking => booking.roomNumber);
    let allRoomNumbers = this.allRooms.map(room => room.number);
    let todaysAvailableRoomNumbers = allRoomNumbers.filter(room => {
      return todaysBookedRooms.indexOf(room) < 0
      });
    let availableRoomsNested = todaysAvailableRoomNumbers.map(number => {
      return this.allRooms.filter(room => room.number === number);
    })
    this.todaysAvailableRooms = availableRoomsNested.flat();
    return this.todaysAvailableRooms;
  }

  displayDatedRoomAvailability(date) {
    domUpdates.displayRoomsAvailable(this.findRoomsNotBookedByDate(date));
  }

  displayTodaysRoomAvailability() {
    domUpdates.displayTodaysAvailableRooms(this.findRoomsNotBookedToday());
  }

  filterAvailableRoomByType(type) {
    let selectedRooms = this.todaysAvailableRooms.filter(room => room.roomType === type);
    domUpdates.displayTodaysAvailableRooms(selectedRooms);
  }


  createNewBooking() {
  }

  createNewRoomServiceOrder() {
  }
 



}


export default Hotel;