/*
Find the maximum occurence of the integer in an array.

*/
//Brute Force or Naive Search O(n^2)
{
    function findMaxOcc(arr) {
        let maxOcc = 0, maxChar = null
        for (let i = 0; i < arr.length; i++) {
            let currCount = 0
            for (let j = 0; j < arr.length; j++) {
                if (arr[i] == arr[j]) {
                    currCount++
                }
            }
            if (currCount > maxOcc) {
                maxOcc = currCount
                maxChar = arr[i]
            }
        }
        return maxChar + " > " + maxOcc
    }
    // console.log(findMaxOcc([1, 2, 3, 4, 4]))
}

//--HashMap O(n)
{
    function findMaxOcc(arr) {
        let hash = {}
        let maxOcc = 0, maxChar = null
        for (let i = 0; i < arr.length; i++) {
            hash[arr[i]] = hash.hasOwnProperty(arr[i]) ? hash[arr[i]] += 1 : 1
            // hash[arr[i]] = hash[arr[i]] ? hash[arr[i]] += 1 : 1           
            if (maxOcc < hash[arr[i]]) {
                maxOcc = hash[arr[i]]
                maxChar = arr[i]
            }
        }
        return maxChar + " >> " + maxOcc
    }
    console.log(findMaxOcc([1, 2, 3, 4, 4]))
}




