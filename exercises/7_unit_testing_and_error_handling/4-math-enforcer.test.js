const mathEnforcer = require('./4-math-enforcer');
const expect = require('chai').expect;

describe('mathEnforcer object tests', () => {
    describe('addFive(num) function tests', () => {
        it('should return correct result with positive integer', () => {
            expect(mathEnforcer.addFive(5)).to.equal(10);
        })
        it('should return correct result with positive float', () => {
            expect(mathEnforcer.addFive(5.5)).to.equal(10.5);
        })
        it('should return correct result with negative integer', () => {
            expect(mathEnforcer.addFive(-10)).to.equal(-5);
        })
        it('should return correct result with negative float', () => {
            expect(mathEnforcer.addFive(-5.5)).to.equal(-0.5);
        })
        it('should return "undefined" with string', () => {
            expect(mathEnforcer.addFive('5')).to.be.undefined;
        })
    })
    describe('subtractTen(num) function tests', () => {
        it('should return correct result with positive integer', () => {
            expect(mathEnforcer.subtractTen(5)).to.equal(-5);
        })
        it('should return correct result with positive float', () => {
            expect(mathEnforcer.subtractTen(10.5)).to.equal(0.5);
        })
        it('should return correct result with negative integer', () => {
            expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
        })
        it('should return correct result with negative float', () => {
            expect(mathEnforcer.subtractTen(-10.5)).to.equal(-20.5);
        })
        it('should return "undefined" with string', () => {
            expect(mathEnforcer.subtractTen('5')).to.be.undefined;
        })
    })
    describe('sum(num1, num2) function tests', () => {
        it('should return correct result with two positive integers', () => {
            expect(mathEnforcer.sum(5, 5)).to.equal(10);
        })
        it('should return correct result with two positive floats', () => {
            expect(mathEnforcer.sum(5.5, 5.5)).to.equal(11);
        })
        it('should return correct result with two negative integers', () => {
            expect(mathEnforcer.sum(-10, -10)).to.equal(-20);
        })
        it('should return correct result with two negative floats', () => {
            expect(mathEnforcer.sum(-10.5, -10.5)).to.equal(-21);
        })
        it('should return "undefined" with first integer and second string', () => {
            expect(mathEnforcer.sum(-10, '-10')).to.be.undefined;
        })
        it('should return "undefined" with second integer and first string', () => {
            expect(mathEnforcer.sum('-10', -10)).to.be.undefined;
        })
    })
})