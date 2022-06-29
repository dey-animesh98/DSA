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


{//Return all distinct pairs of target sum
    function sumUniquePairs(arr, target) {
        let map = new Map()
        let pairs = []
        for (let ele of arr) {
            if (map.get(ele)) {
                pairs.push([map.get(ele), ele])
            } else {
                map.set(target - ele, ele)
            }
        }
        return pairs
    }
    // console.log(sumUniquePairs([1, 2, 4, 3,3, 5, 6, 7], 6));
}

//Return the index of ele of target sum
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

// Check the Sum of target present or not
{
    const findSum = function (nums, target) {
        let map = new Map()
        for (let ele of nums) {
            if (map.has(target - ele)) {
                return 1
            }
            map.set(ele, 1)
        }
        return 0
    };
    // console.log(findSum([1, -2, 3, 8, 7], 6));
}

{
    function twoSum(nums, target) {
        let map = new Map()
        for (i = 0; i < nums.length; i++) {
            if (map.has(target - nums[i])) {
                return [map.get(target - nums[i]), i]
            } else {
                map.set(nums[i], i)
            }
        }

    };

    // console.log(twoSum([2, 7, 11, 15], 9))
}
//Check sum pair exist or not , return only one distinct pair
{//Brute Force O(n^2)

    function sumExists(arr, sum) {
        for (let outer = 0; outer < arr.length - 1; outer++) {
            outerSum = sum - arr[outer]
            for (let inner = outer + 1; inner < arr.length; inner++) {
                if (outerSum === arr[inner]) {
                    console.log(arr[inner], arr[outer])
                    return true
                }
            }
        }
        return false
    }

    // console.log(sumExists([5, 3, 3, 2, 8, 4, 1, 7, 9], 6))

}
//optimize
{
    function sumExists2(arr, sum) {
        let set = new Set()
        for (let i = 0; i < arr.length; i++) {
            let a = sum - arr[i]
            if (set.has(a)) {
                console.log(a, arr[i])
                return true
            }
            set.add(arr[i])
        }
        return false
    }
    // console.log(sumExists2([5, 3, 3, 2, 8, 4, 1, 7, 9], 6))
}

{//leetCode 1.Two Sum
    function sumExists3(arr, sum) {
        let map = new Map()
        for (let i = 0; i < arr.length; i++) {
            let a = sum - arr[i]
            if (map.has(a)) {
                // console.log(a, arr[i])
                return [map.get(a),i]
            }
            map.set(arr[i],i)
        }
        return false
    }
    // console.log(sumExists3([5, 3, 2, 8, 4, 1, 7, 9], 5))
}


/** 
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
}*/