// "Write a function to determine if a positive integer is a perfect square without using built-in functions"

function isPerfectSquare(num) {
    if (num < 0) {
      return false;
    }
  
    for (let i = 0; i * i <= num; i++) {
      if (i * i === num) {
        return true;
      }
    }
    
    return false;
  }

  console.log(isPerfectSquare(4));