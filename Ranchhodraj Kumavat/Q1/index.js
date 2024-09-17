function divide(dividend, divisor) {
    // Handle edge case for integer overflow
    const INT_MAX = Math.pow(2, 31) - 1;
    const INT_MIN = -Math.pow(2, 31);

    // Handle division by zero
    if (divisor === 0) {
        return dividend > 0 ? INT_MAX : INT_MIN;
    }

    // Handle dividend = INT_MIN, divisor = -1 to prevent overflow
    if (dividend === INT_MIN && divisor === -1) {
        return INT_MAX;
    }

    // Determine the sign of the result
    const positive = (dividend > 0) === (divisor > 0);

    // Take the absolute values of dividend and divisor
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);

    let result = 0;
    while (dividend >= divisor) {
        let multiple = divisor;
        let multipleCount = 1;
        while (dividend >= (multiple << 1)) {
            multiple <<= 1;
            multipleCount <<= 1;
        }

        dividend -= multiple;
        result += multipleCount;
    }

    return positive ? result : -result;
}

// Example usage:
const dividend1 = 10;
const divisor1 = 3;
console.log(divide(dividend1, divisor1)); // Output: 3

const dividend2 = 7;
const divisor2 = -3;
console.log(divide(dividend2, divisor2)); // Output: -2
