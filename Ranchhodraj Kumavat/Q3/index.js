function searchInsert(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (nums[mid] === target) {
            return mid; // Target found
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    // Target not found, return the insertion point
    return left;
}

// Example usage:
const nums1 = [1, 3, 5, 6];
const target1 = 5;
console.log(searchInsert(nums1, target1)); // Output: 2

const nums2 = [1, 3, 5, 6];
const target2 = 2;
console.log(searchInsert(nums2, target2)); // Output: 1

const nums3 = [1, 3, 5, 6];
const target3 = 7;
console.log(searchInsert(nums3, target3)); // Output: 4
