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
  
  setTimeout(function() {
    hotel.grandOpening();
    $('#aside__date').text(hotel.date);
    $('#aside__bignum-number').text(hotel.todaysAvailableRoomCount);
    $('#aside__bignum-percentage-span').text(hotel.todaysPercentageOccupied);
    $('#main__bignum-service-charges-span').text(hotel.todaysTotalOrderRevenue);
    $('#main__bignums-revenue-span').text(hotel.todaysTotalRevenue)
    $('#main__bignum-record-high').text(domUpdates.formatDate(hotel.bestDay));
    $('#main__bignum-record-low').text(domUpdates.formatDate(hotel.worstDay));
  }, 2500);


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

  $('#aside__button-search').click((e) => {
    e.preventDefault();
    let searchResult = $('#aside__input-search').val()
    hotel.findCustomerByName(searchResult);
  });

  $('#main__input-search-room').click(() => {
    $( "#main__button-search-rooms" ).datepicker();
  });

  $('#aside__button-add').click((e) => {
    e.preventDefault();
    let newUserName = $('#aside__input-add').val()
    hotel.generateNewCustomer(newUserName)
  })


console.log('This is the JavaScript entry file - your code begins here.');

})