import $ from 'jquery';
import Hotel from '../src/Hotel';

let domUpdates = {

  pageLoadHandler() {
    $('.page').hide();
    $('#main__section-rooms').hide();
    $('#main__section-customers').hide();
    $('#main__section-orders').hide();
    $('.splash').delay(2000).fadeOut("slow");
    $('.page').delay(2500).fadeIn("slow");
  },

  displayRoomsAvailable(){
    $('#aside__bignum-number').text(hotel.todaysAvailableRoomCount);
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

  formatDate(date) {
    let dateArray = date.split('/')
    let day = dateArray[2];
    let month = dateArray[1];
    let year = dateArray[0];
    let reformattedDate = `${month}/${day}/${year}`;
    return reformattedDate;
  },

  displayCustomerInfo(customer) {
    console.log('inside the dom method')
  $('.main__customer-selected-name').text(customer.name)
  },

  displayNoUserByNamePrompt(enteredName) {
    
  },

  displayNoUserByIDPrompt(enteredID) {

  },

}

export default domUpdates;