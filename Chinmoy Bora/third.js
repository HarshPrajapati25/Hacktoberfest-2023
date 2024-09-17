// "Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*' where:

// '?' Matches any single character.
// '*' Matches any sequence of characters (including the empty sequence).
// The matching should cover the entire input string (not partial).

// Example 1:

// Input: s = ""aa"", p = ""a""
// Output: false
// Explanation: ""a"" does not match the entire string ""aa"".
// Example 2:

// Input: s = ""aa"", p = ""*""
// Output: true
// Explanation: '*' matches any sequence.
// Example 3:

// Input: s = ""cb"", p = ""?a""
// Output: false
// Explanation: '?' matches 'c', but the second letter is 'a', which does not match 'b'.
 

// Constraints:

// 0 <= s.length, p.length <= 2000
// s contains only lowercase English letters.
// p contains only lowercase English letters, '?' or '*'."

function isMatch(s, p) {
    const dp = Array(s.length + 1).fill(false);
    dp[0] = true;
    for (let j = 1; j <= p.length; j++) {
        const prev = dp[0];
        dp[0] = dp[0] && p[j - 1] === '*';
        for (let i = 1; i <= s.length; i++) {
            const temp = dp[i];
            if (p[j - 1] === '*') {
                dp[i] = dp[i] || dp[i - 1];
            } else {
                dp[i] = prev && (s[i - 1] === p[j - 1] || p[j - 1] === '?');
            }
            prev = temp;
        }
    }
    return dp[s.length];
}
