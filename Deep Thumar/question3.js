function isValid(s) {
    const stack = [];
    const bracketsMap = {
      "(": ")",
      "{": "}",
      "[": "]",
    };


    
  
    for (let i = 0; i < s.length; i++) {
      const currentChar = s[i];
  
      if (bracketsMap[currentChar]) {
        stack.push(currentChar);
      } else {
        const lastBracket = stack.pop();
  
        if (bracketsMap[lastBracket] !== currentChar) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  }
  
  console.log(isValid("()"));
  console.log(isValid("(]"));