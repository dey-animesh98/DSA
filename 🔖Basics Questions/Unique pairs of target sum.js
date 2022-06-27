//Find unique pairs of ele whose sum is equal to a target

{//It will not  give you unique pairs
    function getSumPair(arr, k) {
        let res = []

        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] + arr[j] === k) {
                    res.push([arr[i], arr[j]])
                }
            }
        }
        return res
    }
    // console.log(getSumPair([2, 5, 2, 1, 6, 5, 4, 3, 8, 2, 3], 6))
}

//method - 2...>> Work in progress
{
    function getSumPair2(arr, k) {
        let map = new Map()
        let uniquePair = []
        for (let ele of arr) {
            map.set(ele, map.get(ele) + 1 || 1)
        }
        console.log(map);
        for (let pairs of map) {
            if (k - pairs[0]) { }
        }////
    }
    // console.log(getSumPair2([1,2,4,3,5,6,7], 5))
}

{

    let twoSum = (array, sum) => {
        let hashMap = {},
            results = []

        for (let i = 0; i < array.length; i++) {
            if (hashMap[array[i]]) {
                results.push([hashMap[array[i]], array[i]])
            } else {
                hashMap[sum - array[i]] = array[i];
            }
        }
        return results;
    }
    // console.log(twoSum([1,2,4,3,5,6,7], 5));
}

{
    var twoSum = function (nums, target) {
        let obj = {}
        for (let i = 0; i < nums.length; i++) {
            if (obj.hasOwnProperty(target - nums[i])) {
                return [obj[target - nums[i]], i]
            }
            obj[nums[i]] = i
        }
    };
    // console.log(twoSum([1, 2, 4, 3, 5, 6, 7], 5));
}

{
    const findSum = function (nums, target) {
        let obj = {}
        for (let i = 0; i < nums.length; i++) {
            if (obj.hasOwnProperty(target - nums[i])) {
                return 1
            }
            obj[nums[i]] = 1
        }
        return 0
    };
    console.log(findSum([1, -2, 3, 8, 7], 6));
}