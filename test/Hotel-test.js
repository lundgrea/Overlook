import chai from 'chai';
const expect = chai.expect;

import Hotel from '../src/Hotel';

var hotel

beforeEach(() => {
  hotel = new Hotel
});

describe('Hotel', function() {

  it('should be a function', function() {
    expect(Hotel).to.be.a('function');
  });

  it('should be an instance of Hotel', function() {
    expect(hotel).to.be.an.instanceof(Hotel);
  });


});