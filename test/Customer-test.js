import chai from 'chai';
const expect = chai.expect;

import Customer from '../src/Customer';
import testUsers from '../src/users-test-data';
import testBookings from '../src/bookings-test-data';
import testRoomServices from '../src/roomServices-test-data';

let customer1, customer2;

beforeEach(() => {
  customer1 = new Customer(testUsers.users[0], testBookings.bookings, testRoomServices.roomServices);
  customer2 = new Customer(testUsers.users[1], testBookings.bookings, testRoomServices.roomServices);
});

describe('Customer', function() {

  it('should be a function', function() {
    expect(Customer).to.be.a('function');
  });

  it('should be an instance of Customer', function() {
    expect(customer1).to.be.an.instanceof(Customer);
  });

  it('should have an ID', function() {
    expect(customer1.id).to.equal(1);
    expect(customer2.id).to.equal(2);
  });

  it('should have a name', function() {
    expect(customer1.name).to.equal('Matilde Larson');
    expect(customer2.name).to.equal('Chadrick Lowe');
  });

  it('should start with no bookings', function() {
    expect(customer1.bookings).to.eql([]);
  });

   it('should start with no bookings for today', function() {
    expect(customer1.todaysBooking).to.eql({});
  });

  it('should start with no orders', function() {
    expect(customer1.orders).to.eql([]);
  });

  it('should have access to all bookings', function() {
    expect(customer1.masterBookings).to.be.an('array');
  });

  it('should have access to all orders', function() {
    expect(customer1.masterOrders).to.be.an('array');
  });

  it('should be able to gather its bookings list', function() {
    customer1.gatherBookingInformation();
    expect(customer1.bookings).to.eql([{
      "date": "2019/10/08",
      "roomNumber": 11,
      "userID": 1
      },
      {
      "date": "2019/07/27",
      "roomNumber": 28,
      "userID": 1
      }])
  });

   it('should be able to gather its orders list', function() {
    customer1.gatherOrderInformation()
    expect(customer1.orders).to.eql([
    {
    userID: 1,
    date: '2019/09/28',
    food: 'Refined Rubber Sandwich',
    totalCost: 9.89
    },
    {
    userID: 1,
    date: '2019/09/28',
    food: 'Refined Rubber Sandwich',
    totalCost: 9.89
    }
    ])
  });

   it('should check for bookings for today', function() {
    customer1.gatherBookingInformation();
    customer1.checkBookingsForToday("2019/07/27");
    expect(customer1.todaysBooking).to.eql({ userID: 1, date: '2019/07/27', roomNumber: 28 });

   });


});