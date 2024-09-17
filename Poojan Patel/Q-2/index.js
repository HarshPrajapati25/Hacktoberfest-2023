function PrefixSum(arr) {
  const n = arr.length;
  const PS = new Array(n);

  PS[0] = arr[0];
  for (let i = 1; i < n; i++) {
    PS[i] = PS[i - 1] + arr[i];
  }
  return PS;
}

function rangeSum(PS, L, R) {
  if (L === 0) {
    return PS[R];
  } else {
    return PS[R] - PS[L - 1];
  }
}
const arr = [3, 7, 2, 5, 8, 9];
const PS = PrefixSum(arr);

console.log(rangeSum(PS, 0, 5));
console.log(rangeSum(PS, 3, 5));
console.log(rangeSum(PS, 2, 4));
