require('ispalindrome');

function isPalindrome(phrase) {
  return typeof phrase === 'string' && phrase.isPalindrome();
}

module.exports = isPalindrome;
