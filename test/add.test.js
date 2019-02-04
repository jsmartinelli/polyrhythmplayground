const sum = function (a, b) {
  return a + b;
};

const should = require('chai').should();


describe('Add two numbers', () => {
  it('should add two numbers', () => {
    sum(1,2).should.equal(3);
  })
})
