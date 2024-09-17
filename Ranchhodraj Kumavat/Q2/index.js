function longestValidParentheses(s) {
    const stack = []; // Stack to store the indices of '(' characters
    let maxValidLength = 0;

    // Initialize the stack with an initial invalid index
    stack.push(-1);

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (char === '(') {
            stack.push(i);
        } else {
            // If it's a closing parenthesis ')'
            stack.pop(); // Pop the last valid '(' index

            if (stack.length === 0) {
                // If the stack is empty, push the current index to mark a new starting point
                stack.push(i);
            } else {
                // Calculate the length of the current valid substring
                maxValidLength = Math.max(maxValidLength, i - stack[stack.length - 1]);
            }
        }
    }

    return maxValidLength;
}

// Example usage:
const s1 = "(()";
console.log(longestValidParentheses(s1)); // Output: 2

const s2 = ")()())";
console.log(longestValidParentheses(s2)); // Output: 4

const s3 = "";
console.log(longestValidParentheses(s3)); // Output: 0
