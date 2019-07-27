import $ from 'jquery';

let domUpdates = {

  pageLoadHandler() {
    $('.page').hide();
    $('.splash').delay(4000).fadeOut("slow");
    $('.page').delay(5000).fadeIn("fast")
    // domUpdates.displayPage()
  },

  // displayPage() {
  //   $('page').delay(4000).show()
  // },

  // postFetchPageLoadHandler() {
  //   // $('.page').show();
  //   // $('.splash').delay(4000).fadeOut("slow")
  //   console.log('inside the fetch page handler');
  //   // $('.splash').hide();
  //   // $('#aside__date').text(domUpdates.displayDate());
  //   // $('#main__section-orders').hide()
  //   // $('#main__section-rooms').hide()
  //   // $('#main__section-customers').hide()
  // },

  displayRoomsAvailable() {
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