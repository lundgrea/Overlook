import chai from 'chai';
const expect = chai.expect;

import RoomService from '../src/RoomService';

var roomService

beforeEach(() => {
  roomService = new RoomService
});

describe('RoomService', function() {

  it('should be a function', function() {
    expect(RoomService).to.be.a('function');
  });

  it('should be an instance of RoomService', function() {
    expect(roomService).to.be.an.instanceof(RoomService);
  });

});