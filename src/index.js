import $ from 'jquery';
import './css/base.scss';

import Hotel from './Hotel';
import domUpdates from './domUpdates.js';


// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'


// const hotel;

let hotel

let usersFetch = fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users").then(response => response.json());
let bookingsFetch = fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings").then(response => response.json());
let roomsFetch = fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms").then(response => response.json());
let roomServiceFetch = fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/room-services/roomServices").then(response => response.json());

let allData = {'users': [] , 'bookings' : [] , 'rooms' : [], 'roomService' :[] }

Promise.all([usersFetch, bookingsFetch, roomsFetch, roomServiceFetch])
  .then(function(data) {
      allData['users'] = data[0].users;
      allData['bookings'] = data[1].bookings;
      allData['rooms'] = data[2].rooms;
      allData['roomService'] = data[3].roomServices;
      return allData
    })
  .then(data => hotel = new Hotel(data))
  .then(hotel => console.log(hotel))
  .catch(err => console.log('fetch error'));


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
