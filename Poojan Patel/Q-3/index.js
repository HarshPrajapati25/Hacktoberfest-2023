//add
function convertToZeros(arr) {
  const sum = arr.reduce((acc, num) => acc + num, 0);

  if (sum >= 0) {
    return "Yes";
  } else {
    return "No";
  }
}

const arr = [1, 2, 3];
const result = convertToZeros(arr);
