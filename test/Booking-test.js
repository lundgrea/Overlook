import chai from 'chai';
const expect = chai.expect;

import Booking from '../src/Booking';
import testBookings from '../src/bookings-test-data'

let booking

beforeEach(() => {
  booking = new Booking(4, '2019/10/19', 5);
});

describe('Booking', function() {

  it('should be a function', function() {
    expect(Booking).to.be.a('function');
  });

  it('should be an instance of Booking', function() {
    expect(booking).to.be.an.instanceof(Booking);
  });

  it('should have an ID number', function() {
    expect(booking.id).to.equal(4)
  });

  it('should have a booking date', function() {
    expect(booking.date).to.equal('2019/10/19')
  })

  it('should have a room number', function() {
    expect(booking.roomNumber).to.equal(5)
  })

});