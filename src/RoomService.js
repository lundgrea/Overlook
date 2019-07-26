import $ from 'jquery';

import testRoomServices from '../src/roomServices-test-data';


class RoomService {
  constructor(roomServices, id, date, food, total) {
    this.roomServices = roomServices;
    this.id = id;
    this.date = date;
    this.food = food || [];
    this.total = total;
  }
}


export default RoomService;