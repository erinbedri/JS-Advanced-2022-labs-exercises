const sum = require('./4-sum-of-numbers');
const { assert } = require('chai');

describe('testing tests', function() {
    it('should be working', function() {
        assert.equal(sum(4, 4), 8)
    })
})