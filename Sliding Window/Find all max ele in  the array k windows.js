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
  // console.log(findAllMax([-1, 1, 3, -2, 1, 5, 4, 7,1,-1,3], 3))
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
  console.log(findAllMax([-1, 1, 3, -2, 1, 5, 4, 7, 1, -1, 3, 8, 5], 3));
}
