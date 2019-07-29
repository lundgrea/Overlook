import $ from 'jquery';
import Hotel from '../src/Hotel';
import Customer from '../src/Customer'

let domUpdates = {

  pageLoadHandler() {
    $('.page').hide();
    $('#main__section-rooms').hide();
    $('#main__section-customers').hide();
    $('.main__customer-selected').hide();
    $('#main__section-orders').hide();
    $('.footer__prompt').hide()
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
    $('.main__customer-unselected').hide()
    $('.main__customer-selected').show()
    $('.main__customer-selected-name').text(customer.name);
  },

  displayNoBookingsMessage(customerName) {
    $('#main__customer-rooms-selected-booking').append(
      `<h5>No current or past bookings for ${customerName}</h5>`)
  },

  displayCustomerBookings(booking) {
    let betterDate = domUpdates.formatDate(booking.date)
    $('#main__customer-rooms-selected-booking').append(
      `<article class="booking-card">
      <h4 class="main__customer-rooms-selected-booking-info main__customer-rooms-selected-booking-date">Booking Date: ${betterDate}</h4>
      <h4 class="main__customer-rooms-selected-booking-info main__customer-rooms-selected-booking-room">Room Number: ${booking.roomNumber}</h4>
      </article>`
      )
  },

  displayNoOrderMessage(customerName) {
     $('#main__customer-orders-selected-orders').append(
      `<h5>No food service orders for ${customerName}</h5>`)
  },

  displayCustomerOrders(order) {
    let betterDate = domUpdates.formatDate(order.date);
    $('#main__customer-orders-selected-orders').append(
      `<article class="order-card">
          <h4 class="main__customer-orders-selected-order-info main__customer-orders-selected-order-date">Order Date: ${betterDate}</h4>
          <h4 class="main__customer-orders-selected-order-info main__customer-orders-selected-order-item">Item Ordered: ${order.food}</h4>
          <h4 class="main__customer-orders-selected-order-info main__customer-orders-selected-order-total">Order Total: $${order.totalCost}</h4>
        </article>`
      )
  },

  displayPromptToBookTonight(customerName) {
    $('.footer__prompt').show();
    $('.footer__prompt').append(`
      <h6 class="footer__prompt-main-message" id="footer__prompt-book-tonight">${customerName} does not have a room booked yet for tonight.</h6>
      <h5 class="footer__prompt-clickable">book now</h5>`)
  },

  displayNoUserByNamePrompt(enteredName) {
    $('.main__prompt-no-user-by-name').text(`No valid user by the name ${enteredName} within the database. Please search by another name.`)
  },

  resetField() {
    console.log('in the reset method')
    $('.aside__input').val('');
  },

  displayNoUserByIDPrompt(enteredID) {
     $('.main__prompt-no-user-by-name').text(`No valid user by the name ${enteredID} within the database. Please search by another ID.`)
  },

}

export default domUpdates;