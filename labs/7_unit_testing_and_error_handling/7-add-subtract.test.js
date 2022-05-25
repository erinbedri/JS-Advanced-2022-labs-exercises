const createCalculator = require('./7-add-subtract');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('Calculator Function Tests', () => {
    describe('Add Function Tests', () => {
        it('with one positive integer', () => {
            let calculator = createCalculator();
            calculator.add(5);
            expect(calculator.get()).to.be.equal(5);
        })
        it('with one negative integer', () => {
            let calculator = createCalculator();
            calculator.add(-5);
            expect(calculator.get()).to.be.equal(-5);
        })
        it('with one positive float', () => {
            let calculator = createCalculator();
            calculator.add(5.5);
            expect(calculator.get()).to.be.equal(5.5);
        })
        it('with one negative float', () => {
            let calculator = createCalculator();
            calculator.add(-5.5);
            expect(calculator.get()).to.be.equal(-5.5);
        })
        it('with one positive integer as string', () => {
            let calculator = createCalculator();
            calculator.add('5');
            expect(calculator.get()).to.be.equal(5);
        })
        it('with one negative integer as string', () => {
            let calculator = createCalculator();
            calculator.add('5');
            expect(calculator.get()).to.be.equal(5);
        })
        it('with one positive float as string', () => {
            let calculator = createCalculator();
            calculator.add('5.5');
            expect(calculator.get()).to.be.equal(5.5);
        })
        it('with one negative float as string', () => {
            let calculator = createCalculator();
            calculator.add('-5.5');
            expect(calculator.get()).to.be.equal(-5.5);
        })
        it('without argument, expect "undefined" and "NaN"', () => {
            let calculator = createCalculator();
            expect(calculator.add()).to.be.undefined;
            expect(calculator.get()).to.be.NaN;
        })
        it('with empty array, expect 0', () => {
            let calculator = createCalculator();
            calculator.add([]);
            expect(calculator.get()).to.be.equal(0);
        })
        it('with object, expect "undefined""', () => {
            let calculator = createCalculator();
            calculator.add({});
            expect(calculator.get()).to.be.NaN;
        })
        it('with string which is not a number, expect "NaN"', () => {
            let calculator = createCalculator();
            calculator.add({});
            expect(calculator.get()).to.be.NaN;
        })
        it('with two integers', () => {
            let calculator = createCalculator();
            calculator.add(2, 3);
            expect(calculator.get()).to.be.equal(2);
        })
    })
    describe('Subtract Function Tests', () => {
        it('with one positive integer', () => {
            let calculator = createCalculator();
            calculator.subtract(5);
            expect(calculator.get()).to.be.equal(-5);
        })
        it('with one negative integer', () => {
            let calculator = createCalculator();
            calculator.subtract(-5);
            expect(calculator.get()).to.be.equal(5);
        })
        it('with one positive float', () => {
            let calculator = createCalculator();
            calculator.subtract(5.5);
            expect(calculator.get()).to.be.equal(-5.5);
        })
        it('with one negative float', () => {
            let calculator = createCalculator();
            calculator.subtract(-5.5);
            expect(calculator.get()).to.be.equal(5.5);
        })
        it('with one positive integer as string', () => {
            let calculator = createCalculator();
            calculator.subtract('5');
            expect(calculator.get()).to.be.equal(-5);
        })
        it('with one negative integer as string', () => {
            let calculator = createCalculator();
            calculator.subtract('5');
            expect(calculator.get()).to.be.equal(-5);
        })
        it('with one positive float as string', () => {
            let calculator = createCalculator();
            calculator.subtract('5.5');
            expect(calculator.get()).to.be.equal(-5.5);
        })
        it('with one negative float as string', () => {
            let calculator = createCalculator();
            calculator.subtract('-5.5');
            expect(calculator.get()).to.be.equal(5.5);
        })
        it('without argument, expect "undefined" and "NaN"', () => {
            let calculator = createCalculator();
            expect(calculator.subtract()).to.be.undefined;
            expect(calculator.get()).to.be.NaN;
        })
        it('with empty array, expect 0', () => {
            let calculator = createCalculator();
            calculator.subtract([]);
            expect(calculator.get()).to.be.equal(0);
        })
        it('with object, expect "undefined""', () => {
            let calculator = createCalculator();
            calculator.subtract({});
            expect(calculator.get()).to.be.NaN;
        })
        it('with string which is not a number, expect "NaN"', () => {
            let calculator = createCalculator();
            calculator.subtract({});
            expect(calculator.get()).to.be.NaN;
        })
        it('with two integers', () => {
            let calculator = createCalculator();
            calculator.subtract(2, 3);
            expect(calculator.get()).to.be.equal(-2);
        })
    })
})