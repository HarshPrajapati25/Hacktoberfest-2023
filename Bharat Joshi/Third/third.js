function findSingleNumber(nums) {
    let result = 0;

    for (const num of nums) {
        result ^= num;
    }

    return result;
}

const input = [2, 2, 1];
const singleNumber = findSingleNumber(input);
console.log(singleNumber);
