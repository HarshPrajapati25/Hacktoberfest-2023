function twoSum(nums, target) {
  const numIndicesMap = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (complement in numIndicesMap) {
      return [numIndicesMap[complement], i];
    }

    numIndicesMap[nums[i]] = i;
  }

  return null;
}

const nums = [2, 7, 11, 15];
const target = 18;
const output = twoSum(nums, target);
console.log(output);
