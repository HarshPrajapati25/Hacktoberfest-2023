function swapNumbersWithoutTemp(a, b) {
    a = a + b;
    b = a - b;
    a = a - b;

    return [a, b];
}

const num1 = 5;
const num2 = 10;
const [swappedNum1, swappedNum2] = swapNumbersWithoutTemp(num1, num2);
console.log(`After swapping: num1 = ${swappedNum1}, num2 = ${swappedNum2}`);
