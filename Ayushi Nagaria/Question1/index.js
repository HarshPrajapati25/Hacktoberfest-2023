function findMatchingAndNonMatchingCharacters(str1, str2) {
    const set1 = new Set(str1);
    const set2 = new Set(str2);
    let matchingCount = 0;
  
    // Find matching characters
    for (const char of set1) {
      if (set2.has(char)) {
        matchingCount++;
      }
    }
  
    // Find non-matching characters
    const nonMatchingCount = (set1.size - matchingCount) + (set2.size - matchingCount);
  
    return matchingCount;
  }
  
  const str1 = "abcdef";
  const str2 = "defghia";
  const matchingCount = findMatchingAndNonMatchingCharacters(str1, str2);
  console.log("Matching characters count:", matchingCount);
  