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
    $('.footer__prompt').hide();
    $('#main__section-booking').hide()
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
    $('#main__section-booking').hide()
    $('#main__section-orders').show();
  },

  roomButtonHandler() {
    console.log('rooms click');
    $('#main__section-home').hide();
    $('#main__section-orders').hide();
    $('#main__section-customers').hide();
    $('#main__section-booking').hide()
    $('#main__section-rooms').show();
  },

  customerButtonHandler() {
    console.log('customers click');
    $('#main__section-home').hide();
    $('#main__section-orders').hide();
    $('#main__section-rooms').hide();
    $('#main__section-booking').hide()
    $('#main__section-customers').show();
  },

  homeButtonHandler() {
    console.log('home click')
    $('#main__section-orders').hide();
    $('#main__section-rooms').hide();
    $('#main__section-customers').hide();
    $('#main__section-booking').hide()
    $('#main__section-home').show();
  },

  bookNowButtonHandler() {
    $('#main__section-orders').hide();
    $('#main__section-rooms').hide();
    $('#main__section-customers').hide();
    $('#main__section-home').hide();
    $('.footer__prompt').hide();
    $('#main__section-booking').show();
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

  displayPromptToBookTonight() {
    $('.footer__prompt').show();
  },

  displayNoUserByNamePrompt(enteredName) {
    $('.main__prompt-no-user-by-name').text(`No valid user by the name ${enteredName} within the database. Please search by another name.`)
  },

  resetField() {
    $('.aside__input').val('');
  },

  displayNoUserByIDPrompt(enteredID) {
     $('.main__prompt-no-user-by-name').text(`No valid user by the name ${enteredID} within the database. Please search by another ID.`)
  },

  displayOrdersToday(order) {
    $('.main__section-orders').append(
      `<article class="order-card">
          <h4 class="main__orders-general-info" id="main__orders-general-info-item">Item: ${order.food}</h4>
          <h4 class="main__orders-general-info"  id="main__orders-general-info-total">Total: $${order.totalCost}</h4>
        </article>`)
  }, 

  displayOrdersTodayTotalCost(cost) {
    $('#main__customer-selected-order-total-today').text(`Today's Order Total: $${cost}`)
  },

  displayNoOrderCostToday(name) {
    $('#main__customer-selected-order-total-today').text(`Order Total For Today: $0`)
  },

  displayAllTimeOrderCostForCustomer(cost) {
    $('#main__customer-selected-order-total-all-time').text(`All Time Order Total: $${cost}`)
  }, 

   displayNoOrderCostForCustomer(name) {
    $('$main__customer-selected-order-total-all-time').text(`Order Total For All Time: $0`)
  }, 

  displayNoOrdersForSelectedDate(date) {
    let betterDate = domUpdates.formatDate(date);
    $('.main__orders-search-results').text('')
    $('#main__input-search-orders').val('')
    $('.main__orders-search-results').append(`
        <h5>Search Results</h5>
        <h4>No Room Service Orders for ${betterDate}</h4>`)
  },

  displayDateSearchedOrders(orders) {
    $('.main__orders-search-results').text('')
    $('#main__input-search-orders').val('')
    $('.main__orders-search-results').append(`<h5 class="main__orders-search-headline">Search Results</h5>`)
    orders.map(order =>{
    $('.main__orders-search-headline').after(
      `<article class="order-card">
          <h4 class="main__order-searched-order-info">Order Date: ${order.date}</h4>
          <h4 class="main__order-searched-order-info">Item Ordered: ${order.food}</h4>
          <h4 class="main__order-searched-order-info">Order Total: $${order.totalCost}</h4>
        </article>`)
    })
  },

  displayNoBookingsForSelectedDate(date) {
    let betterDate = domUpdates.formatDate(date);
    $('.main__rooms-search-results').text('')
    $('#main__input-search-room').val('');
    $('.main__rooms-search-results').append(`<h5>Search Results</h5>
        <h4>No Bookings for ${betterDate}</h4>`)
  },

  displayDateSearchedBookings(bookings) {
    $('.main__rooms-search-results').text('')
    $('#main__input-search-room').val('');
    $('.main__rooms-search-result').append(`
    <h5 class="main__rooms-search-headline">Search Results</h5>`)
    bookings.map(booking =>
    $('.main__rooms-search-headline').after(`
      <article class="booking-card">
        <h4 class="main__rooms-searched-booking-info">Booking Date: ${booking.date}</h4>
        <h4 class="main__rooms-searched-booking-info">Room Number: ${booking.roomNumber}</h4>
      </article>`)
    )
  },

  displayRoomsAvailable(rooms) {
    $('.main__rooms-search-results').text('')
    $('#main__input-search-room').val('');
    $('.main__rooms-search-results').append(`
      <h5 class="main__rooms-search-headline">Search Results</h5>`)
    rooms.map(room => {
      $('.main__rooms-search-headline').after(`
          <tr class="main__rooms-chart" id="main__rooms-chart-data">
             <td class="main__rooms-chart-line" id="main__rooms-chart-room-number">${room.number}</td>
            <td class="main__rooms-chart-line" id="main__rooms-chart-room-type">${room.roomType}</td> 
            <td class="main__rooms-chart-line" id="main__rooms-chart-room-num-beds">${room.numBeds}</td>
            <td class="main__rooms-chart-line" id="main__rooms-chart-room-bed-size">${room.bedSize}</td>
            <td class="main__rooms-chart-line" id="main__rooms-chart-room-cost">${room.costPerNight}</td>
            <td class="main__rooms-chart-line" id="main__rooms-chart-room-bidet">${room.bidet}</td>
            <td class="main__rooms-chart-line" id="main__rooms-chart-room-availability">Yes</td>
          </tr>
        </table>`)
    })
  },

  displayTodaysAvailableRooms(rooms) {
    console.log(rooms)
    $('.main__rooms-tonight-search-results').append(`
      <h5 class="main__rooms-search-headline">Rooms Available Today</h5>`)
    rooms.map(room => {
      $('.main__rooms-search-headline').after(`
          <tr class="main__rooms-chart" id="main__rooms-chart-data">
             <td class="main__rooms-chart-line" id="main__rooms-chart-room-number">${room.number}</td>
            <td class="main__rooms-chart-line" id="main__rooms-chart-room-type">${room.roomType}</td> 
            <td class="main__rooms-chart-line" id="main__rooms-chart-room-num-beds">${room.numBeds}</td>
            <td class="main__rooms-chart-line" id="main__rooms-chart-room-bed-size">${room.bedSize}</td>
            <td class="main__rooms-chart-line" id="main__rooms-chart-room-cost">${room.costPerNight}</td>
            <td class="main__rooms-chart-line" id="main__rooms-chart-room-bidet">${room.bidet}</td>
            <td class="main__rooms-chart-line" id="main__rooms-chart-room-availability">Yes</td>
          </tr>
        </table>`)
    })
  },

  displayAvailableRoomsByType() {

  }
}
export default domUpdates;