const { assert } = require('chai');
const isPalindrome = require('../../src/helpers/is-palindrome');

describe('testing isPalindrome', function () {
  it('should be false for any non-string', function () {
    const textWord = 11122111;
    assert.isFalse(isPalindrome(textWord));
  });

  it('should be false for a non-palindrome string', function () {
    const textWord = 'abcd';
    assert.isFalse(isPalindrome(textWord));
  });

  it('should be true for a palindrome string', function () {
    const textWord = 'abba';
    assert.isTrue(isPalindrome(textWord));
  });
});
