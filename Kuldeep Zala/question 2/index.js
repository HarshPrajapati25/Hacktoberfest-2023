// "Given an integer x, return true if x is a 
// palindrome, and false otherwise.
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

function isPalindrome(x) {
    if (x < 0) {
        return false;
    }
    let reversed = 0;
    let original = x;
    while (x > 0) {
        reversed = reversed * 10 + (x % 10);
        x = Math.floor(x / 10);
    }
    return reversed === original;
}

console.log(isPalindrome(121)); 
console.log(isPalindrome(-121)); 
console.log(isPalindrome(10)); 
