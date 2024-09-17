function shuffleArray(arr) {
    // Clone the input array to avoid modifying the original array
    const shuffledArray = [...arr];
  
    // Fisher-Yates shuffle algorithm
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      // Swap elements at i and j
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
  
    return shuffledArray;
  }
  
  const a = [1, 2, 5, 3, 4, 6, 7, 8, 8, 8, 8, 9, 9, 9];
  const shuffledArray = shuffleArray(a);
  
  console.log("Original array:", a);
  console.log("Shuffled array:", shuffledArray);
  