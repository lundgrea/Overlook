import $ from 'jquery';
import './css/base.scss';

import Hotel from './Hotel';
import domUpdates from './domUpdates.js';


// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import './images/search.svg'
import './images/add.svg'
import './images/roomservice.svg'
import './images/bed.svg'



$(document).ready(() => {
  $('#aside__date').text(domUpdates.displayDate())
})

console.log('This is the JavaScript entry file - your code begins here.');
