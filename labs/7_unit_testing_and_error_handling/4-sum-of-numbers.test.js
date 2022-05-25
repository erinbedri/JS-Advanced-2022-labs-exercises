const sum = require('./4-sum-of-numbers');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('Function Sum Tests', function() {
    it('Should start summing from 0', function() {
        expect(sum([])).to.be.equal(0);
    })
    it('Should return correct sum', function() {
        expect(sum([1, 2, 3])).to.be.equal(6);
    })
    it('Should return undefined when argument is not an array', function() {
        expect(sum('12')).to.be.equal(3);
    })
})