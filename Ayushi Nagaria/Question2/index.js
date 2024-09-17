function findMissingNumbersWithDuplicates(arr) {
    arr.sort((a, b) => a - b); // Sort the array
    const missingNumbers = [];
  
    for (let i = 0; i < arr.length - 1; i++) {
      const current = arr[i];
      const next = arr[i + 1];
      
      if (current === next) {
        continue; // Skip duplicates
      }
  
      if (next - current > 1) {
        for (let j = current + 1; j < next; j++) {
          missingNumbers.push(j);
        }
      }
    }
  
    return missingNumbers;
  }
  
  const inputArray = [4, 2, 3, 4, 8, 7, 8, 5];
  const missingNumbers = findMissingNumbersWithDuplicates(inputArray);
  console.log("Missing numbers:", missingNumbers);
  