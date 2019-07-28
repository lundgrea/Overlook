import $ from 'jquery';
import Hotel from '../src/Hotel';
import Customer from '../src/Customer'

let domUpdates = {

  pageLoadHandler() {
    $('.page').hide();
    $('#main__section-rooms').hide();
    $('#main__section-customers').hide();
    $('.main__customer-selected').hide()
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
  },

  displayCustomerOrders(order) {
    console.log('in the dom order method')
    let betterDate = domUpdates.formatDate(order.date);
    $('#main__customer-orders-selected-orders').append(
      `<article class="order-card">
          <h4 class="main__customer-orders-selected-order-info main__customer-orders-selected-order-date">Order Date: ${betterDate}</h4>
          <h4 class="main__customer-orders-selected-order-info main__customer-orders-selected-order-item">Item Ordered: ${order.food}</h4>
          <h4 class="main__customer-orders-selected-order-info main__customer-orders-selected-order-total">Order Total: $${order.totalCost}</h4>
        </article>`
      )
  },

  displayNoUserByNamePrompt(enteredName) {
  },

  displayNoUserByIDPrompt(enteredID) {
  },

}

export default domUpdates;