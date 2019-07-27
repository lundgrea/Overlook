import chai from 'chai';
const expect = chai.expect;

import Hotel from '../src/Hotel';
import Customer from '../src/Customer';
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
  hotel = new Hotel('2019/07/26', users, rooms, bookings, orders);
});

describe('Hotel', function() {

  it('should be a function', function() {
    expect(Hotel).to.be.a('function');
  });

  it('should be an instance of Hotel', function() {
    expect(hotel).to.be.an.instanceof(Hotel);
  });

  it('should be able to figure out the date' function(){
    hotel.grandOpening();
    expect(hotel.date).to.equal()
  });

  it('should know what day today is', function() {
    expect(hotel.date).to.equal('2019/07/26') ;
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

  it('should be able to find specific customers by their ID', function() {
    hotel.findCustomer(7);
    expect(hotel.currentCustomer).to.eql([{"id": 7, "name": "Josianne Huels"}])
  });

  it('should be able to find available rooms', function(){
    hotel.findBookedRooms('2019/10/29')
    expect(hotel.todaysBookings).to.eql([ { userID: 93, date: '2019/10/29', roomNumber: 34 },
  { userID: 86, date: '2019/10/29', roomNumber: 2 } ])
  });

  it('should tell you the number of rooms available', function() {
    hotel.findBookedRooms('2019/10/29')
    hotel.findNumberRoomsAvailable()
    expect(hotel.todaysAvailableRoomCount).to.equal(3)
  });

  it('should be able to tell you the percentage occupied for the given date', function() {
    hotel.findBookedRooms('2019/10/29')
    hotel.calculatePercentageOccupancy()
    expect(hotel.percentageOccupied).to.equal(40)
  });

});