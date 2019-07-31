import chai from 'chai';
const expect = chai.expect;

import Hotel from '../src/Hotel';
import Customer from '../src/Customer';
import testUsers from '../src/users-test-data';
import testRooms from '../src/rooms-test-data';
import testRoomServices from '../src/roomServices-test-data';
import testBookings from '../src/bookings-test-data';

let hotel;

let info = 
  {
  'users': testUsers.users, 
  'bookings' : testBookings.bookings, 
  'rooms': testRooms.rooms, 
  'roomService': testRoomServices.roomServices
  };

beforeEach(() => {
  hotel = new Hotel(info);
});

describe('Hotel', function() {

  it('should be a function', function() {
    expect(Hotel).to.be.a('function');
  });

  it('should be an instance of Hotel', function() {
    expect(hotel).to.be.an.instanceof(Hotel);
  });

  it('should be able to figure out the date', function() {
    hotel.getToday();
    expect(hotel.date).to.equal('7/31/2019');
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

  it('should start with no information for rooms available', function() {
    expect(hotel.todaysAvailableRoomCount).to.equal(null);
  });

  it('should start with no date, in either formats', function() {
    expect(hotel.date).to.equal(null);
    expect(hotel.unformattedDate).to.equal(null);
  });

  it('should start with no information for percentage occupancy', function() {
    expect(hotel.todaysPercentageOccupied).to.equal(null);
  });

  it('should start with no information for todays order revenue', function() {
    expect(hotel.todaysTotalOrderRevenue).to.equal(null);
  });

  it('should start with no information for todays total revenue', function() {
    expect(hotel.todaysTotalRevenue).to.equal(null);
  });

  it('should start with no information for todays orders', function() {
    expect(hotel.todaysOrders).to.equal(null);
  });

  it('should start with no information for the record best day', function() {
    expect(hotel.bestDay).to.equal(null);
  });

  it('should start with no information for the record worse day', function() {
    expect(hotel.worstDay).to.equal(null);
  });

   it('should be able to reformat the date', function() {
    hotel.unformatDate('8/28/2019');
    expect(hotel.unformattedDate).to.equal('2019/08/28');
  });

  it('should be able to find specific customers by their ID', function() {
    hotel.findCustomerById(7);
    expect(hotel.currentCustomer).to.eql({"id": 7, "name": "Josianne Huels"});
  });

  it('should be able to let you know if a customer does not exist', function() {
    hotel.findCustomerById(55);
    expect(hotel.currentCustomer).to.eql({});
  });

  it('should be able to find specific customers by their name', function() {
    hotel.findCustomerByName('Josianne Huels');
    expect(hotel.currentCustomer).to.eql({"id": 7, "name": "Josianne Huels"});
  });

  it('should be able to let you know if a customer does not exist', function() {
    hotel.findCustomerByName('Alyssa');
    expect(hotel.currentCustomer).to.eql({});
  });

  it('should be able to find available rooms', function() {
    hotel.findBookedRooms('2019/10/29');
    expect(hotel.todaysBookings).to.eql([ { userID: 93, date: '2019/10/29', roomNumber: 34 },
  { userID: 86, date: '2019/10/29', roomNumber: 2 } ]);
  });

  it('should tell you the number of rooms available', function() {
    hotel.findBookedRooms('2019/10/29')
    hotel.findNumberRoomsAvailable();
    expect(hotel.todaysAvailableRoomCount).to.equal(5);
  });

  it('should be able to tell you the percentage occupied for the given date', function() {
    hotel.findBookedRooms('2019/10/29')
    hotel.calculatePercentageOccupancy();
    expect(hotel.todaysPercentageOccupied).to.equal('29');
  });

  it('should be able to tell you the total room serivce order revenue from a given date', function() {
    hotel.calculateOrdersToday('2019/10/18');
    expect(hotel.todaysTotalOrderRevenue).to.equal('25.28');
  });

  it('should be able to tell you the total revenue from a given date', function() {
    hotel.calculateOrdersToday('2019/10/19');
    expect(hotel.todaysTotalOrderRevenue).to.equal('7.95');
    hotel.calculateRevenueToday('2019/10/19');
    expect(hotel.todaysTotalRevenue).to.equal('484.40');
  });

  it('should tell you the hotels best days of sales', function() {
    hotel.findBestDay();
    expect(hotel.bestDay).to.equal('2019/08/28');
  });

   it('should tell you the hotels worst days of sales', function() {
    hotel.findWorstDay();
    expect(hotel.worstDay).to.equal('2019/09/05');
  });

   it('should be able to generate a new user', function() {
    hotel.generateNewCustomer('Alyssa Lundgren');
    expect(hotel.currentCustomer.name).to.equal('Alyssa Lundgren');
   });

});