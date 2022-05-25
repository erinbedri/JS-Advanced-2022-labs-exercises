const lookupChar = require('./3-char-lookup');
const expect = require('chai').expect;

describe('Char Lookup Function Tests', () => {
    it('should return "undefined" when no parameters', () => {
        expect(lookupChar()).to.be.undefined;
    })
    it('should return "undefined" when first paramenter is not a string', () => {
        expect(lookupChar(10, 5)).to.be.undefined;
    })
    it('should return "undefined" when first paramenter is a string and second is not a number', () => {
        expect(lookupChar('string', '5')).to.be.undefined;
    })
    it('should return "undefined" when first paramenter is not a string and second is not a number', () => {
        expect(lookupChar(10, "5")).to.be.undefined;
    })
    it('should return "undefined" when first paramenter is valid and second is float', () => {
        expect(lookupChar('string', -1.5)).to.be.undefined;
    })
    it('should return "incorect index" when first paramenter is valid and second is negative number', () => {
        expect(lookupChar('string', -5)).to.be.equal('Incorrect index');
    })
    it('should return "incorect index" when first paramenter is valid and second is bigger than string lenght', () => {
        expect(lookupChar('string', 7)).to.be.equal('Incorrect index');
    })
    it('should return "incorect index" when first paramenter is valid and second is equal to string lenght', () => {
        expect(lookupChar('string', 6)).to.be.equal('Incorrect index');
    })
    it('should return "incorect index" when first paramenter is empty string and second is 0', () => {
        expect(lookupChar('', 0)).to.be.equal('Incorrect index');
    })
    it('should return correct char when two valid parameters', () => {
        expect(lookupChar('string', 1)).to.be.equal('t');
    })
})