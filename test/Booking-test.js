import chai from 'chai';
const expect = chai.expect;

import Booking from '../src/Booking';

var booking

beforeEach(() => {
  booking = new Booking
});

describe('Booking', function() {

  it('should be a function', function() {
    expect(Booking).to.be.a('function');
  });

  it('should be an instance of Booking', function() {
    expect(booking.to.be.an.instanceof(Booking);
  });


});