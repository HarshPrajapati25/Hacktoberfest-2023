// "Given two strings s1 and s2 of the same length, return true if s2 is a scrambled string of s1, otherwise, return false.

 

// Example 1:

// Input: s1 = ""great"", s2 = ""rgeat""
// Output: true
// Explanation: One possible scenario applied on s1 is:
// ""great"" --> ""gr/eat"" // divide at random index.
// ""gr/eat"" --> ""gr/eat"" // random decision is not to swap the two substrings and keep them in order.
// ""gr/eat"" --> ""g/r / e/at"" // apply the same algorithm recursively on both substrings. divide at random index each of them.
// ""g/r / e/at"" --> ""r/g / e/at"" // random decision was to swap the first substring and to keep the second substring in the same order.
// ""r/g / e/at"" --> ""r/g / e/ a/t"" // again apply the algorithm recursively, divide ""at"" to ""a/t"".
// ""r/g / e/ a/t"" --> ""r/g / e/ a/t"" // random decision is to keep both substrings in the same order.
// The algorithm stops now, and the result string is ""rgeat"" which is s2.
// As one possible scenario led s1 to be scrambled to s2, we return true.
// Example 2:

// Input: s1 = ""abcde"", s2 = ""caebd""
// Output: false
// Example 3:

// Input: s1 = ""a"", s2 = ""a""
// Output: true
 

// Constraints:

// s1.length == s2.length
// 1 <= s1.length <= 30
// s1 and s2 consist of lowercase English letters."


/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const isScramble = (s1, s2) => {
    if (s1 === s2) return true;
    if (s1.length !== s2.length) return false;
    
    const sortedS1 = s1.split('').sort().join('');
    const sortedS2 = s2.split('').sort().join('');
    if (sortedS1 !== sortedS2) return false;

    const length = s1.length;
    for (let i = 1; i < length; i++) {
        const s1Left = s1.substring(0, i);
        const s1Right = s1.substring(i);
        const s2Left1 = s2.substring(0, i);
        const s2Right1 = s2.substring(i);
        const s2Left2 = s2.substring(0, length - i);
        const s2Right2 = s2.substring(length - i);

        if (isScramble(s1Left, s2Left1) && isScramble(s1Right, s2Right1)) {
            return true;
        }
        if (isScramble(s1Left, s2Right2) && isScramble(s1Right, s2Left2)) {
            return true;
        }
    }

    return false;
};

// Example usage:
const s1_1 = "great";
const s2_1 = "rgeat";
console.log(isScramble(s1_1, s2_1)); // Output: true

const s1_2 = "abcde";
const s2_2 = "caebd";
console.log(isScramble(s1_2, s2_2)); // Output: false

const s1_3 = "a";
const s2_3 = "a";
console.log(isScramble(s1_3, s2_3)); // Output: true
