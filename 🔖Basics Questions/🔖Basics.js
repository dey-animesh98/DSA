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


