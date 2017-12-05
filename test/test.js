const assert = require('assert');


const fn = require('../utils/fn');

describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal(-1, [1, 2, 3].indexOf(5));
            assert.equal(0, [1, 2, 3].indexOf(1));
        });
    });
    describe('#length', function () {
        it('should return 0 when the array is empty', function () {
            assert.equal(0, [].length);
        });
        it('should return not 0 when the array is not empty', function () {
            assert.notEqual(0, [1, 2, 3].length);
        });
    });
});
describe('#Custom fn()', function(){
    it('should return 2 when value gt 2', function(){
        assert.equal(2, fn(3));
    });
    it('should return 1 when value lt 2', function(){
        assert.equal(1, fn(2));
    });
});
