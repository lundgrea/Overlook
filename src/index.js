import $ from 'jquery';
import './css/base.scss';

import Hotel from './Hotel';
import domUpdates from './domUpdates.js';


// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'


// const hotel;

let hotel

let users = fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users").then(response => response.json());
let bookings = fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings").then(response => response.json());
let rooms = fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms").then(response => response.json());
let roomService = fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/room-services/roomServices").then(response => response.json());

Promise.all([users, bookings, rooms, roomService])
  .then(data => startApp(data))
  .catch(err => console.log('fetch error'));

function startApp(fetchedInfo) {
  console.log('FETCHEDINFO :', fetchedInfo)
  hotel = new Hotel(fetchedInfo[0],fetchedInfo[1], fetchedInfo[2], fetchedInfo[3]);
  console.log(hotel);
  fetchHandler()
}

function fetchHandler(){
  $('aside__bignum-number').text(hotel.findNumberRoomsAvailable(domUpdates.displayDate))

}

$(document).ready(() => {
  domUpdates.pageLoadHandler();

  $('#header__button-orders').click(() => {
    domUpdates.orderButtonHandler();
  });

  $('#header__button-rooms').click(() => {
    domUpdates.roomButtonHandler();
  });

  $('#header__button-customers').click(() => {
    domUpdates.customerButtonHandler();
  });

  $('#header__button-home').click(() => {
    domUpdates.homeButtonHandler();
  });

})



console.log('This is the JavaScript entry file - your code begins here.');
