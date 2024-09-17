function reverseStringInPlace(s) {
    const charArray = s.split('');
    let start = 0;
    let end = charArray.length - 1;
    while (start < end) {
        const temp = charArray[start];
        charArray[start] = charArray[end];
        charArray[end] = temp;
        start++;
        end--;
    }
    const reversedString = charArray.join('');
    return reversedString;
}

const inputString = "hello";
const reversed = reverseStringInPlace(inputString);

console.log(reversed); 
