import $ from 'jquery';

let domUpdates = {

  displayDate() {
    let today = new Date().toLocaleDateString();
    return today;
  }
  
}

export default domUpdates;