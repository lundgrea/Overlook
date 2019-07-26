import chai from 'chai';
const expect = chai.expect;

import Hotel from '../src/Hotel';
import testUsers from '../src/users-test-data';
import testRooms from '../src/rooms-test-data';
import testRoomServices from '../src/roomServices-test-data';
import testBookings from '../src/bookings-test-data';

let hotel;
let users = testUsers.users;
let rooms = testRooms.rooms;
let bookings = testBookings.bookings;
let orders = testRoomServices.roomServices;

beforeEach(() => {
  hotel = new Hotel('2019/10/19', users, rooms, bookings, orders);
});

describe('Hotel', function() {

  it('should be a function', function() {
    expect(Hotel).to.be.a('function');
  });

  it('should be an instance of Hotel', function() {
    expect(hotel).to.be.an.instanceof(Hotel);
  });

  it('should know what day today is', function() {
    expect(hotel.date).to.equal('2019/10/19') ;
  });

  it('should manage all hotel guests', function() {
    expect(hotel.allCustomers).to.be.a('array');
  });

  it('should manage all hotel rooms', function() {
    expect(hotel.allRooms).to.be.a('array');
  });

  it('should manage all hotel room service orders', function() {
    expect(hotel.allRoomServiceOrders).to.be.a('array');
  });

  it('should manage the booking of all hotel rooms', function() {
    expect(hotel.allBookings).to.be.a('array');
  });

});