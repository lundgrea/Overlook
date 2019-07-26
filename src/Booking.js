import $ from 'jquery';
import sampleBookings from '../src/bookings-test-data'

class Booking {
  constructor(id, date, room) {
    this.id = id;
    this.date = date;
    this.roomNumber = room;
  }
}

export default Booking;