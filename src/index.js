import $ from 'jquery';
import './css/base.scss';

import Hotel from './Hotel';
import domUpdates from './domUpdates.js';


// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'



$(document).ready(() => {
$('#aside__date').text(domUpdates.displayDate())
// $('#main__page-orders').hide()

 $('#header__button-orders').click(() => {
    ('#main__page-orders').delay(1000).fadeIn()
  })



})



console.log('This is the JavaScript entry file - your code begins here.');
