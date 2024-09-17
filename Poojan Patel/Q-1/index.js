function LongestConsecutiveSubarray(arr) {
  if (arr.length === 0) {
    return 0;
  }
  arr.sort((a, b) => a - b);

  let CL = 1;
  let ML = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1] + 1) {
      CL++;
      ML = Math.max(ML, CL);
    } else if (arr[i] !== arr[i - 1]) {
      CL = 1;
    }
  }
  return ML;
}
const arr = [1, 2, 3, 5, 6, 7];
const result = LongestConsecutiveSubarray(arr);
console.log("longest consecutive subarray length:", result);
