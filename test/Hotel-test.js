import chai from 'chai';
const expect = chai.expect;

import Hotel from '../src/Hotel';
import testUsers from '../src/users-test-data';
import testRoomServices from '../src/roomServices-test-data';
import testRooms from '../src/rooms-test-data';
import sampleBookings from '../src/bookings-test-data';

let hotel

beforeEach(() => {
  hotel = new Hotel();
});

describe('Hotel', function() {

  it('should be a function', function() {
    expect(Hotel).to.be.a('function');
  });

  it('should be an instance of Hotel', function() {
    expect(hotel).to.be.an.instanceof(Hotel);
  });


});