import chai from 'chai';
const expect = chai.expect;

import RoomService from '../src/RoomService';
import testRoomServices from '../src/roomServices-test-data';

let roomService

beforeEach(() => {
  roomService = new RoomService(testRoomServices, 14, "2019/07/29", "Rustic Concrete Sandwich", 14.9)
});

describe('RoomService', function() {

  it('should be a function', function() {
    expect(RoomService).to.be.a('function');
  });

  it('should be an instance of RoomService', function() {
    expect(roomService).to.be.an.instanceof(RoomService);
  });

  it('should have an ID', function() {
    expect(roomService.id).to.equal(14);
  });

  it('should have a date', function() {
    expect(roomService.date).to.equal("2019/07/29");
  });

  it('should have a food order', function() {
    expect(roomService.food).to.equal("Rustic Concrete Sandwich");
  });

  it('should have an order total', function() {
    expect(roomService.total).to.equal(14.9);
  });

});