const PaymentPackage = require('./12-payment-package');
const expect = require('chai').expect;

describe('PaymentPackage Class tests', () => {
    describe('Initialization tests', () => {
        it('should initialize correctly', () => {
            let payment = new PaymentPackage('Test Name', 100);

            expect(payment.name).to.equal('Test Name');
            expect(payment.value).to.equal(100);
            expect(payment.VAT).to.equal(20);
            expect(payment.active).to.be.true;
        })

        it('should initialize correctly when 3 paramenters are given', () => {
            let payment = new PaymentPackage('Test Name', 100, 'additional parameter');

            expect(payment.name).to.equal('Test Name');
            expect(payment.value).to.equal(100);
            expect(payment.VAT).to.equal(20);
            expect(payment.active).to.be.true;
        })

        it('should throw error when initialized with 1 parameters', () => {
            expect(() => {new PaymentPackage('Test Name')}).to.throw('Value must be a non-negative number');
        })

        it('should throw error when initialized without parameters', () => {
            expect(() => {new PaymentPackage()}).to.throw('Name must be a non-empty string');
        })
    })

    describe('Get name tests', () => {
        it('should return correct name', () => {
            let payment = new PaymentPackage('Test Name', 100);

            expect(payment.name).to.equal('Test Name');
        })
    })

    describe('Set name tests', () => {
        it('should set name correctly', () => {
            let payment = new PaymentPackage('Test Name', 100);

            payment.name = 'New Test Name';

            expect(payment.name).to.equal('New Test Name');
        })

        it('should throw error when name set to integer', () => {
            let payment = new PaymentPackage('Test Name', 100);

            expect(() => { payment.name = 100 }).to.throw('Name must be a non-empty string');
        })

        it('should throw error when name set to undefined', () => {
            let payment = new PaymentPackage('Test Name', 100);

            expect(() => { payment.name = undefined }).to.throw('Name must be a non-empty string');
        })

        it('should throw error when name set to null', () => {
            let payment = new PaymentPackage('Test Name', 100);

            expect(() => { payment.name = null }).to.throw('Name must be a non-empty string');
        })

        it('should throw error when name set to empty string', () => {
            let payment = new PaymentPackage('Test Name', 100);

            expect(() => { payment.name = '' }).to.throw('Name must be a non-empty string');
        })
    })

    describe('Get value tests', () => {
        it('should return correct value', () => {
            let payment = new PaymentPackage('Test Name', 100);

            expect(payment.value).to.equal(100);
        })
    })

    describe('Set value tests', () => {
        it('should set value correctly with positive integer', () => {
            let payment = new PaymentPackage('Test Name', 100);

            payment.value = 50;

            expect(payment.value).to.equal(50);
        })

        it('should set value correctly with 0', () => {
            let payment = new PaymentPackage('Test Name', 100);

            payment.value = 0;

            expect(payment.value).to.equal(0);
        })

        it('should set value correctly with positive float', () => {
            let payment = new PaymentPackage('Test Name', 100);

            payment.value = 50.55;

            expect(payment.value).to.equal(50.55);
        })

        it('should throw error when value set to string', () => {
            let payment = new PaymentPackage('Test Name', 100);

            expect(() => { payment.value = '100' }).to.throw('Value must be a non-negative number');
        })

        it('should throw error when value set to undefined', () => {
            let payment = new PaymentPackage('Test Name', 100);

            expect(() => { payment.value = undefined }).to.throw('Value must be a non-negative number');
        })

        it('should throw error when value set to null', () => {
            let payment = new PaymentPackage('Test Name', 100);

            expect(() => { payment.value = null }).to.throw('Value must be a non-negative number');
        })

        it('should throw error when value set to negative integer', () => {
            let payment = new PaymentPackage('Test Name', 100);

            expect(() => { payment.value = -10 }).to.throw('Value must be a non-negative number');
        })

        it('should throw error when value set to negative float', () => {
            let payment = new PaymentPackage('Test Name', 100);

            expect(() => { payment.value = -10.5 }).to.throw('Value must be a non-negative number');
        })
    })

    describe('Get VAT tests', () => {
        it('should return default VAT', () => {
            let payment = new PaymentPackage('Test Name', 100);

            expect(payment.VAT).to.equal(20);
        })
    })

    describe('Set VAT tests', () => {
        it('should set VAT correctly with positive integer', () => {
            let payment = new PaymentPackage('Test Name', 100);

            payment.VAT = 50;

            expect(payment.VAT).to.equal(50);
        })

        it('should set VAT correctly with 0', () => {
            let payment = new PaymentPackage('Test Name', 100);

            payment.VAT = 0;

            expect(payment.VAT).to.equal(0);
        })

        it('should set VAT correctly with positive float', () => {
            let payment = new PaymentPackage('Test Name', 100);

            payment.VAT = 50.55;

            expect(payment.VAT).to.equal(50.55);
        })

        it('should throw error when VAT set to string', () => {
            let payment = new PaymentPackage('Test Name', 100);

            expect(() => { payment.VAT = '100' }).to.throw('VAT must be a non-negative number');
        })

        it('should throw error when VAT set to undefined', () => {
            let payment = new PaymentPackage('Test Name', 100);

            expect(() => { payment.VAT = undefined }).to.throw('VAT must be a non-negative number');
        })

        it('should throw error when VAT set to null', () => {
            let payment = new PaymentPackage('Test Name', 100);

            expect(() => { payment.VAT = null }).to.throw('VAT must be a non-negative number');
        })

        it('should throw error when VAT set to negative integer', () => {
            let payment = new PaymentPackage('Test Name', 100);

            expect(() => { payment.VAT = -10 }).to.throw('VAT must be a non-negative number');
        })

        it('should throw error when VAT set to negative float', () => {
            let payment = new PaymentPackage('Test Name', 100);

            expect(() => { payment.VAT = -10.5 }).to.throw('VAT must be a non-negative number');
        })
    })

    describe('Get active tests', () => {
        it('should return default active value', () => {
            let payment = new PaymentPackage('Test Name', 100);

            expect(payment.active).to.be.true;
        })
    })

    describe('Set active tests', () => {
        it('should set active correctly when boolean', () => {
            let payment = new PaymentPackage('Test Name', 100);

            payment.active = false;

            expect(payment.active).to.be.false;
        })

        it('should throw error when active set to string', () => {
            let payment = new PaymentPackage('Test Name', 100);

            expect(() => { payment.active = 'true' }).to.throw('Active status must be a boolean');
        })

        it('should throw error when active set to undefined', () => {
            let payment = new PaymentPackage('Test Name', 100);

            expect(() => { payment.active = undefined }).to.throw('Active status must be a boolean');
        })

        it('should throw error when active set to integer', () => {
            let payment = new PaymentPackage('Test Name', 100);

            expect(() => { payment.active = 100 }).to.throw('Active status must be a boolean');
        })

        it('should throw error when active set to null', () => {
            let payment = new PaymentPackage('Test Name', 100);

            expect(() => { payment.active = null }).to.throw('Active status must be a boolean');
        })
    })

    describe('toString tests', () => {
        it('should return correct values with active account', () => {
            let payment = new PaymentPackage('Test Name', 100);
            let result = 'Package: Test Name\n';
            result += '- Value (excl. VAT): 100\n';
            result += '- Value (VAT 20%): 120';

            expect(payment.toString()).to.equal(result);
        })

        it('should return correct values with inactive account', () => {
            let payment = new PaymentPackage('Test Name', 100);
            payment.active = false;

            let result = 'Package: Test Name (inactive)\n';
            result += '- Value (excl. VAT): 100\n';
            result += '- Value (VAT 20%): 120';

            expect(payment.toString()).to.equal(result);
        })

    })
})