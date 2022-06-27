/**
 * Find All the max element in the array in K size window.
 * let arr = [-1,1,3,-2,1,5,4,7] , k =3
 * ans = [3,3,3,5,5,7]
 * Explanation :
 * |-1,1,3| -> 3
 * |1,3,-2| -> 3
 * |3,-2,1| -> 3
 * |-2,1,5| -> 5
 * |1,5,4| -> 5
 * |5,4,7| -> 7
 */
//-- Brute Force
{
  // TC -> O(nw)
  function findAllMax(array, k) {
    let ans = [];
    let max = -Infinity;
    for (let i = 0; i < array.length - k + 1; i++) {
      for (let j = i; j < i + k; j++) {
        if (array[j] > max) {
          max = array[j];
        }
      }
      ans.push(max);
      max = -Infinity;
    }
    return ans;
  }
  // console.log(findAllMax([1,3,1,2,0,5], 3))
}

//Optimized Approach
{
  //--O(n)
  function findAllMax(array, k) {
    let que = [],
      ans = [],
      max = -Infinity;
    for (let i = 0; i < k; i++) {
      while (que.length > 0 && array[i] >= que[que.length - 1]) {
        que.pop(); // if last ele in array is less than incoming(array[i]) ele then the last ele will pop out.(work after min one ele pushed)
      }
      que.push(array[i]);
      if (array[i] > max) {
        max = array[i]; // Finding the max val from first K size window
      }
    }
    ans.push(max); //Pushing the max val from first K size window

    for (let j = k; j < array.length; j++) {
      if (que.length === k) {
        que.shift(); // if the que is full (Queue length is == K) then remove ele from front because already pushed to ans
      }
      let lastIndexInQue = que.length - 1; // To access last ele in array to check last ele either greater or less than incoming ele (array[j])
      while (que.length && que[lastIndexInQue] <= array[j]) {
        que.pop(); // last element is less than incoming ele then last ele will pop out
        lastIndexInQue = que.length - 1; // reseting new index of last ele
      }
      que.push(array[j]); // pushing the ele  (this will remove in above condition in future if any greater ele come.)
      ans.push(que[0]); // first ele will push to ans because first index is always greater
    }
    return ans;
  }
  // console.log(findAllMax([1,3,1,2,0,5], 3));
}

//-
{
  var maxSlidingWindow = function (nums, k) {
    let que = [], max = -Infinity, ans = []
    
    for (let i = 0; i < k; i++) {
      while (que.length > 0 && nums[i] >= nums[que[que.length - 1]]) {
        que.pop()
      }
      que.push(i)
      if (nums[i] > max) {
        max = nums[i]
      }
    }
    ans.push(max)

    for (let j = k; j < nums.length; j++) {
      
      while (que.length > 0 && nums[que[que.length - 1]] <= nums[j]) {
        que.pop()
      }
      if (que.length > 0 && que[0] <= j-k ) {
        que.shift()
      }
      que.push(j)
      ans.push(nums[que[0]])
    }
    return ans
  };
  console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3))
}


{
  var maxSlidingWindow = function(nums, k) {
    var result = [];
    let window = [];
    
    for (let i = 0; i < k; i++) {
        while (window.length > 0 && nums[i] >= nums[window[window.length - 1]]) {
            window.pop();
        } 
        // Add current element at the back of the queue
        window.push(i);
    }
    
    // Appending the largest element in the window to the result
    result.push(nums[window[0]])
    
    for (let i = k; i < nums.length; i++) {
      
        while (window.length > 0 && nums[i] >= nums[window[window.length - 1]]) {
            window.pop();
        }
    
        // Remove first index from the window deque if 
        // it doesn't fall in the current window anymore
        if (window.length > 0 && (window[0] <= i - k)) {
            window.shift();
        }
        // Add current element at the back of the queue
        window.push(i);
        result.push(nums[window[0]]);
    } 
    return result;
};
console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3))

}
