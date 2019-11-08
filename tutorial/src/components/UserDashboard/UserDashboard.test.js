var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe('Array', function() {
  describe('#filter()', function() {
    it('should return a new list according to the specified function (element > 0)', function() {
      assert.deepEqual(([-1, -6, 0, 1000, 4, 2, 1, -9, 2].filter((val, index) => val > 0)), [1000, 4, 2, 1, 2]);
    });
  });
});

describe('Array', function() {
  describe('#pop', function() {
    it('should remove last element from the list and return it', function() {
      let fang_companies = ['Facebook', 'Apple', 'Netflix', 'Google']
      let goog = fang_companies.pop()
      assert.equal(goog, 'Google');
      assert.deepEqual(fang_companies, ['Facebook', 'Apple', 'Netflix']);
    });
  });
});

describe('Array', function() {
  describe('#push', function() {
    it('should add element to the end of the list', function() {
      let social_media_companies = ['Facebook', 'Instagram', 'Snap']
      social_media_companies.push('TikTok')
      assert.deepEqual(social_media_companies, ['Facebook', 'Instagram', 'Snap', 'TikTok']);
    });
  });
});
