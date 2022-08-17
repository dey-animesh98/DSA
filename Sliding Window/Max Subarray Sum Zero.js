function maxLen(arr) {
    //code here
    let map = new Map();
    map.set(0, -1);
    let currSum = 0, maxStreak = 0;

    for (let i = 0; i < arr.length; i++) {
        currSum += arr[i];

        if (map.has(currSum)) {
            maxStreak = Math.max(maxStreak, i - map.get(currSum));
        } else {
            map.set(currSum, i);
        }
    }

    return maxStreak;
}

console.log(maxLen([3, 1, -4, 6, 2, -5, -1, 4, -2, 1, -3, 2]));
//[15, -2, 2, -8, 1, 7, 10, 23]