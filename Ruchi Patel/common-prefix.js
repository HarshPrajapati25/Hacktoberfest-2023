// "Write a function to find the longest common prefix of an array of strings.

let inputString = ["flower", "flour", "flourish"];

function CommonPrefix(stringArr){
        let size = inputString.length;

        if(size === 0){
            return ""
        }
        if(size === 1){
            return stringArr[0]
        }

        let end = Math.min(stringArr[0].length, stringArr[size-1].length);
        let i=0;

        while (i < end && stringArr[0][i] == stringArr[size-1][i] )
            i++;

        let pre = stringArr[0].substring(0, i);
        return pre;
    }
CommonPrefix(inputString)