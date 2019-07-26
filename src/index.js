import $ from 'jquery';
import './css/base.scss';

import Hotel from './Hotel';
import domUpdates from './domUpdates.js';


// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'



$(document).ready(() => {
  $('#aside__date').text(domUpdates.displayDate())
  $('#main__section-orders').hide()
  $('#main__section-rooms').hide()
  $('#main__section-customers').hide()


  $('#header__button-orders').click(() => {
    console.log('order click');
    $('#main__section-home').hide();
    $('#main__section-rooms').hide();
    $('#main__section-customers').hide();
    $('#main__section-orders').show();
  })

  $('#header__button-rooms').click(() => {
    console.log('rooms click');
    $('#main__section-home').hide();
    $('#main__section-orders').hide();
    $('#main__section-customers').hide();
    $('#main__section-rooms').show();
  })

  $('#header__button-customers').click(() => {
    console.log('customers click');
    $('#main__section-home').hide();
    $('#main__section-orders').hide();
    $('#main__section-rooms').hide();
    $('#main__section-customers').show();
  })

  $('#header__button-home').click(() => {
    console.log('home click')
    $('#main__section-orders').hide();
    $('#main__section-rooms').hide();
    $('#main__section-customers').hide();
    $('#main__section-home').show();
    
  })



})



console.log('This is the JavaScript entry file - your code begins here.');
