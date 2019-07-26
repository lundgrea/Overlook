import $ from 'jquery';
import sampleBookings from '../src/bookings-test-data'

class Booking {
  constructor(bookings, id, date, room) {
    this.bookings = bookings;
    this.id = id;
    this.date = date;
    this.roomNumber = room;
  }
}

export default Booking;