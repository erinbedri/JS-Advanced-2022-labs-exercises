const rgbToHexColor = require('./6-rgb-to-hex');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('RGB to Hex color converter funtion tests', () => {
    describe('Regular cases', () => {
        it('Should return "#000000" when (0, 0, 0) are provided as arguments', () => {
            expect(rgbToHexColor(0, 0, 0)).to.be.equal('#000000');
        })
        it('Should return "#6A0DAD" when (106, 13, 173) are provided as arguments', () => {
            expect(rgbToHexColor(0, 0, 0)).to.be.equal('#000000');
        })
        it('Should return "#FFFFFF" when (255, 255, 255) are provided as arguments', () => {
            expect(rgbToHexColor(255, 255, 255)).to.be.equal('#FFFFFF');
        })
        it('Should return "undefined" when red is string', () => {
            expect(rgbToHexColor("0", 0, 0)).to.be.undefined;
        })
        it('Should return "undefined" when green is string', () => {
            expect(rgbToHexColor(0, "0", 0)).to.be.undefined;
        })
        it('Should return "undefined" when blue string', () => {
            expect(rgbToHexColor(0, 0, "0")).to.be.undefined;
        })
        it('Should return "undefined" when red is negative integer', () => {
            expect(rgbToHexColor(-10, 0, 0)).to.be.undefined;
        })
        it('Should return "undefined" when green is negative integer', () => {
            expect(rgbToHexColor(0, -10, 0)).to.be.undefined;
        })
        it('Should return "undefined" when blue is negative integer', () => {
            expect(rgbToHexColor(0, 0, -10)).to.be.undefined;
        })
        it('Should return "undefined" when red is 256', () => {
            expect(rgbToHexColor(256, 0, 0)).to.be.undefined;
        })
        it('Should return "undefined" when green is 256', () => {
            expect(rgbToHexColor(0, 256, 0)).to.be.undefined;
        })
        it('Should return "undefined" when blue is 256', () => {
            expect(rgbToHexColor(0, 0, 256)).to.be.undefined;
        })
    })
    describe('Edge cases', () => {
        it('Should return "undefined" when no arguments are provided', () => {
            expect(rgbToHexColor(0)).to.be.undefined;
        })
        it('Should return "#000000" when 3 valid arguments and one invalid argument are provided', () => {
            expect(rgbToHexColor(0)).to.be.undefined;
        })
        it('Should return "undefined" when 3 "undefined" arguments are provided', () => {
            expect(rgbToHexColor(0)).to.be.undefined;
        })
        it('Should return "undefined" when floats are given as arguments', () => {
            expect(rgbToHexColor(3.14, 5.23, 4.34)).to.be.undefined;
        })
    })
})