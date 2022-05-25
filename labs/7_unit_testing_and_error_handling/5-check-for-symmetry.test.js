const isSymmetric = require('./5-check-for-symmetry');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('Function isSymmetric Tests', () => {
    it('Should return false when passed in argument is not an array', () => {
        expect(isSymmetric({})).to.be.false;
    })
    it('Should return false when input array is odd and is not symmetric', () => {
        expect(isSymmetric([1, 2, 3])).to.be.false;
    })
    it('Should return false when input array is even and is not symmetric', () => {
        expect(isSymmetric([1, 2, 3, 4])).to.be.false;
    })
    it('Should return false when input is not provided', () => {
        expect(isSymmetric()).to.be.false;
    })
    it('Should return true when input array of numbers is symmetric', () => {
        expect(isSymmetric([1, 2, 1])).to.be.true;
    })
    it('Should return true when input array of strings is symmetric', () => {
        expect(isSymmetric(['a', 'b', 'a'])).to.be.true;
    })
    it('Should return true when input is empty array', () => {
        expect(isSymmetric([])).to.be.true;
    })
    it('Should return false when input array has number and string of the same number', () => {
        expect(isSymmetric([1, '1'])).to.be.false;
    })
})
