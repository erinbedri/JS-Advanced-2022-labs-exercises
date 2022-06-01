const StringBuilder = require('./13-string-builder');
const expect = require('chai').expect;

describe('StringBuilder Class Tests', () => {
    describe('Constructor tests', () => {
        it('should instantiated correctly with undefined as parameter', () => {
            let builder = new StringBuilder();
            let result = '';
            
            expect(builder.toString()).to.be.equal(result);
        })
        it('should instantiated correctly with 1-letter string as parameter', () => {
            let builder = new StringBuilder('a');
            let result = 'a';
            
            expect(builder.toString()).to.be.equal(result);
        })
        it('should instantiated correctly with 3-letter string as parameter', () => {
            let builder = new StringBuilder('abc');
            let result = 'abc';
            
            expect(builder.toString()).to.be.equal(result);
        })
        it('should throw error with non-string as parameter', () => {
            expect(() => {new StringBuilder(3)}).to.throw(TypeError, 'Argument must be a string');
            expect(() => {new StringBuilder(null)}).to.throw(TypeError, 'Argument must be a string');
            expect(() => {new StringBuilder([])}).to.throw(TypeError, 'Argument must be a string');
            expect(() => {new StringBuilder({})}).to.throw(TypeError, 'Argument must be a string');
        })
    })
    describe('append(string) method tests', () => {
        it('should append correctly with string paramenter', () => {
            let builder = new StringBuilder('abc');

            builder.append('123');

            expect(builder.toString()).to.equal('abc123');        
        })
        it('should throw error with non-string as parameter', () => {
            let builder = new StringBuilder('abc');
            expect(() => {builder.append(123)}).to.throw(TypeError, 'Argument must be a string');

            let builder2 = new StringBuilder('abc');
            expect(() => {builder2.append([])}).to.throw(TypeError, 'Argument must be a string');

            let builder3 = new StringBuilder('abc');
            expect(() => {builder3.append({})}).to.throw(TypeError, 'Argument must be a string');

            let builder4 = new StringBuilder('abc');
            expect(() => {builder4.append(null)}).to.throw(TypeError, 'Argument must be a string');
        })
    })
    describe('prepend(string) method tests', () => {
        it('should prepend correctly with string paramenter', () => {
            let builder = new StringBuilder('abc');

            builder.prepend('123');

            expect(builder.toString()).to.equal('123abc');        
        })
        it('should throw error with non-string as parameter', () => {
            let builder = new StringBuilder('abc');
            expect(() => {builder.prepend(123)}).to.throw(TypeError, 'Argument must be a string');

            let builder2 = new StringBuilder('abc');
            expect(() => {builder2.prepend([])}).to.throw(TypeError, 'Argument must be a string');

            let builder3 = new StringBuilder('abc');
            expect(() => {builder3.prepend({})}).to.throw(TypeError, 'Argument must be a string');

            let builder4 = new StringBuilder('abc');
            expect(() => {builder4.prepend(null)}).to.throw(TypeError, 'Argument must be a string');
        })
    })
    describe('insertAt(string, startIndex) method tests', () => {
        it('should insert correctly with string paramenter', () => {
            let builder = new StringBuilder('abc');

            builder.insertAt('123', 1);

            expect(builder.toString()).to.equal('a123bc');        
        })
        it('should throw error with non-string as parameter', () => {
            let builder = new StringBuilder('abc');
            expect(() => {builder.insertAt(123, 1)}).to.throw(TypeError, 'Argument must be a string');

            let builder2 = new StringBuilder('abc');
            expect(() => {builder2.insertAt([], 1)}).to.throw(TypeError, 'Argument must be a string');

            let builder3 = new StringBuilder('abc');
            expect(() => {builder3.insertAt({}, 1)}).to.throw(TypeError, 'Argument must be a string');

            let builder4 = new StringBuilder('abc');
            expect(() => {builder4.insertAt(null, 1)}).to.throw(TypeError, 'Argument must be a string');
        })
    })
    describe('remove(startIndex, length) method tests', () => {
        it('should remove correctly', () => {
            let builder = new StringBuilder('abcde');
            builder.remove(1, 2);
            expect(builder.toString()).to.equal('ade');   

            let builder2 = new StringBuilder('abcde');
            builder2.remove();
            expect(builder2.toString()).to.equal('abcde'); 
        })
        it('should remove correctly with startingIndex negative integer', () => {
            let builder = new StringBuilder('abc');

            builder.remove(-1, 1);

            expect(builder.toString()).to.equal('ab');   
        })
    })
    describe('toString() method tests', () => {
        it('should return correctly', () => {
            let builder = new StringBuilder('abc');

            expect(builder.toString()).to.equal('abc');
        })
        it('should work correctly - 2', () => {
            const expected = '\n A \n\r B\t123   ';
            const builder = new StringBuilder();
        
            expected.split('').forEach(s => {builder.append(s); builder.prepend(s); });
        
            builder.insertAt('test', 4);
        
            builder.remove(2, 4);
        
            expect(builder.toString()).to.equal('  st21\tB \r\n A \n\n A \n\r B\t123   ');
        });
    })
})