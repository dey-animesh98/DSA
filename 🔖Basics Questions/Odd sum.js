function getSubArr(arr) {
    const subArrays = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            subArrays.push(arr.slice(i, j + 1));
        }
    }
    return subArrays;
}
let numOfSubarrays = function (arr) {
    let allArr = getSubArr(arr)
    let count = 0
   
    
    for (let i = 0; i < allArr.length; i++) {
        let sum = 0
        for (let j = 0; j < allArr[i].length; j++) {
            sum += allArr[i][j]
        }
        if (sum % 2 !==  0) count++
    }
    return count
};

console.log(numOfSubarrays([1,3,5]))