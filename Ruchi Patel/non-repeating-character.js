// "Create a function to find the first non-repeating character in a string.

function nonRepeatingCharater(string){

    const count = {};

    for(let character of string){
        count[character] = (count[character] || 0 ) + 1
    }
    for(let character of string){
       if(count[character] === 1){
        return count[character]
       }
    }
    return null
}

console.log(nonRepeatingCharater("leetcode"))