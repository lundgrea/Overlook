import $ from 'jquery';
import Hotel from '../src/Hotel';

let domUpdates = {

  pageLoadHandler() {
    $('.page').hide();
    $('#main__section-rooms').hide();
    $('#main__section-customers').hide();
    $('#main__section-orders').hide();
    $('.splash').delay(1500).fadeOut("slow");
    $('.page').delay(2000).fadeIn("slow");
  },

  displayRoomsAvailable(){
    $('#aside__bignum-number').text(hotel.todaysAvailableRoomCount)
  },

  orderButtonHandler() {
    console.log('order click');
    $('#main__section-home').hide();
    $('#main__section-rooms').hide();
    $('#main__section-customers').hide();
    $('#main__section-orders').show();
  },

  roomButtonHandler() {
    console.log('rooms click');
    $('#main__section-home').hide();
    $('#main__section-orders').hide();
    $('#main__section-customers').hide();
    $('#main__section-rooms').show();
  },

  customerButtonHandler() {
    console.log('customers click');
    $('#main__section-home').hide();
    $('#main__section-orders').hide();
    $('#main__section-rooms').hide();
    $('#main__section-customers').show();
  },

  homeButtonHandler() {
    console.log('home click')
    $('#main__section-orders').hide();
    $('#main__section-rooms').hide();
    $('#main__section-customers').hide();
    $('#main__section-home').show();
  },

  displayDate() {
    let today = new Date().toLocaleDateString();
    return today;
  },
  
}

export default domUpdates;