function isPalindrome(str) {
    str = str.toLowerCase().replace(/\s/g, '');
    const reversedStr = str.split('').reverse().join('');
    if (str === reversedStr) {
      return "It's a palindrome";
    } else {
      return "Not a palindrome!";
    }
  }
  console.log(isPalindrome("malayalam"));
  console.log(isPalindrome("Dad")); 
