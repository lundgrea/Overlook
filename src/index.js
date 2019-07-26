import $ from 'jquery';
import './css/base.scss';

import Hotel from './Hotel';
import domUpdates from './domUpdates.js';


// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'



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
