
/**
 * 
 * 1) get subsequence of a string,
2) KPC PROBLEM
1. You are given a string str. The string str will contains numbers only, where each number stands for a key pressed on a mobile phone.
2. The following list is the key to characters map :
    0 -> .;
    1 -> abc
    2 -> def
    3 -> ghi
    4 -> jkl
    5 -> mno
    6 -> pqrs
    7 -> tu
    8 -> vwx
    9 -> yz
3. Complete the body of getKPC function - without changing signature - to get the list of all words that could be produced by the keys in str.
Use sample input and output to take idea about output.
3) GET MAZE PATHS
1. You are given a number n and a number m representing number of rows and columns in a maze.
2. You are standing in the top-left corner and have to reach the bottom-right corner. Only two moves are allowed 'h' (1-step horizontal) and 'v' (1-step vertical).
3. Complete the body of getMazePath function - without changing signature - to get the list of all paths that can be used to move from top-left to bottom-right.
4)get maze paths with jumps
 */

function twoSum(nums, target) {
  let res = []
  let map = new Map()
  for (i = 0; i < nums.length; i++) {
    if (map.get(nums[i])) {
      res.push(map.get(nums[i]), i)
    } else {
      map.set(target - map.get(nums[i]), i)
    }

  }
  return res
};

// console.log(twoSum([2, 7, 11, 15], 9))


////////////////////// 29.06.2022//////////////
//Spread Operator  do Shallow Copy
{
  function removeDup(arr) {
    const set = new Set(arr)
    return [...set]
  }
  // console.log(removeDup([2,4,8,6,2,4,5,6,2,1,2]))
}

//------------------------------------------------------
//Print FooBar
//---------------------------------------------------
//Check Integer
{
  function int(input) {
    if (input < 0) {
      input = Math.abs(input)
    }
    let isNumber = true
    for (let i = 0; i < input.length; i++) {
      if (input[i] >= "0" && input[i] <= "9") {
        continue;
      } else {
        isNumber = false
        break;
      }
    }
    return isNumber
  }
  // console.log(int("-12345798"))
}
//-------------------------------------------
function isPrime(num) {

  if (num === 2) {
    return true;
  } else if (num > 1) {
    for (var i = 2; i < num; i++) {

      if (num % i !== 0) {
        return true;
      } else if (num === i * i) {
        return false
      } else {
        return false;
      }
    }
  } else {
    return false;
  }

}


///
//Check if both halves of the string have same set of characters
{
  function half(a) {

    let mid = Math.floor(a.length / 2)
    if (a.length % 2 === 1) {
      a.splice(mid, 1)
    }

    let map = new Map()
    for (let i = 0; i < mid; i++) {
      map.set(a[i], map.get(a[i]) + 1 || 1)
    }

    for (let j = mid; j < a.length; j++) {
      if (map.get(a[j])) {
        map.set(a[j], map.get(a[j]) - 1)
      }

      if (map.get(a[j]) === 0) {
        map.delete(a[j])
      }
    }

    if (map.size === 0) return "Yes"
    return "No"

  }

  // console.log(half(["a", "b", "c", "b", "a", "c"]))
}

//Sort the 1st half of an array in ascending and 2nd half in descending order respectively

{
  function solution(a, arr) {
    //Write your solution here
    let mid = Math.floor(a / 2)
    for (let i = 0; i < a; i++) {
      for (let j = 1; j < a - i; j++) {
        if (arr[j] < arr[j - 1]) {
          let temp = arr[j - 1]
          arr[j - 1] = arr[j]
          arr[j] = temp
        }
      }
    }

    let start = mid, end = a - 1
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]]
      start++
      end--
    }
    return arr.join(' ')
  }
}


//
// Find the hidden number
{//Bekar dhop
  function solution1(a, arr) {
    //Write your solution here
    let sum = 0
    for (let ele of arr) {
      sum += ele
    }
    let hidden = Math.round(sum / a)
    if (arr.includes(hidden)) {
      return hidden
    } else {
      return -1
    }
  }
  // console.log(solution1(4,[7,4,5,3]))
}

// console.log(15 - 7 * (5))


//Return the data that how many times each animal repeated

function animalFreqCount(animals) {
  let animalFre = {}

  for (let animal of animals) {
      if (animalFre[animal]) {
          animalFre[animal] += 1
      } else {
          animalFre[animal] = 1
      }
  }
  return animalFre
}

// console.log(animalFreqCount(["dog", "pussy", "cook", "dog", "lion", "pussy", "cat"]))