import $ from 'jquery';

import testUsers from '../src/users-test-data';
import testRooms from '../src/rooms-test-data';
import testRoomServices from '../src/roomServices-test-data';
import testBookings from '../src/bookings-test-data';

class Hotel {
  constructor(date, customers, rooms, bookings, orders) {
    this.date = date;
    this.allCustomers = customers;
    this.allRooms = rooms;
    this.allBookings = bookings;
    this.allRoomServiceOrders = orders;
  }

  grandOpening() {
    
  }
}


export default Hotel;