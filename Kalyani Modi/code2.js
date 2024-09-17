//Q. Fibonacci Series using recursion

function fibonacciRecursive(n) {
  if (n <= 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    const prevSeries = fibonacciRecursive(n - 1);
    const nextNumber =
      prevSeries[prevSeries.length - 1] + prevSeries[prevSeries.length - 2];
    return [...prevSeries, nextNumber];
  }
}

const n = 10; // Change this value to generate a different number of Fibonacci numbers
const fibonacciSeries = fibonacciRecursive(n);
console.log("fibonacciSeries::", fibonacciSeries);
