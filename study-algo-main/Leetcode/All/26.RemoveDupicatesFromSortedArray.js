/**
 * @param {number[]} nums
 * @return {number}
 */
//  Input: nums = [1,1,2]
//  Output: 2, nums = [1,2]
//  Explanation: Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
//  It doesn't matter what you leave beyond the returned length.
var removeDuplicates = function (nums) {
    // set current=0, next to 1 and count of nums to be changed to 1 as the 1st element is initially not duplicate 
    let current = 0;
    let next = 1;
    let count = 1;

    while (next < nums.length) {
        // if the current and next element are differnt
        if (nums[current] !== nums[next]) {
            nums[count] = nums[next];  // set the element at count to element at next
            current = next;
            next++;
            count++;
        }
        else {
            next++;
        }
    }
    return count;
};
