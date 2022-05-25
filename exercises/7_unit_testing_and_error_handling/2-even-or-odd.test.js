const isOddOrEven = require('./2-even-or-odd');
const expect = require('chai').expect;

describe('Odd or Even Function Tests', () => {
    it('Should return "undefined" when integer is passed as argument', () =>{
        expect(isOddOrEven(5)).to.be.undefined;
    })
    it('Should return "undefined" when array is passed as argument', () =>{
        expect(isOddOrEven([])).to.be.undefined;
    })
    it('Should return "even" when string with even length is passed as argument', () =>{
        expect(isOddOrEven('even')).to.be.equal('even');
    })
    it('Should return "odd" when string with odd length is passed as argument', () =>{
        expect(isOddOrEven('odd')).to.be.equal('odd');
    })
})