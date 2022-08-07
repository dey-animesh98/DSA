
//All Unique Subarrays
{
    function getSubArrays(arr) {
        const subArrays = [];

        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length - i; j++) {
                const subArray = arr.slice(i, j + i + 1);
                subArrays.push(subArray);
            }
        }
        return subArrays
    }


    let res = JSON.stringify(getSubArrays([1, 2, 3, 4]))
    console.log(res)
}



{
    function getSubArrays2(arr) {
        const subArrays = [];
        for (let i = 0; i < arr.length; i++) {
            for (let j = i; j < arr.length; j++) {
                subArrays.push(arr.slice(i, j + 1));
            }
        }
        return subArrays;
    }

    let res = JSON.stringify(getSubArrays2([1, 2, 3, 4]))
    console.log(res)
}



{
    //All possible pairs

    {
        function getSubPairs(arr) {
            if (arr.length === 1) return [arr];
            else {
                let subarr = getSubPairs(arr.slice(0, -1));
                return subarr.concat(subarr.map(e => e.concat(arr[arr.length - 1])), [[arr[arr.length - 1]]]);
            }
        }
        //   let res = getSubPairs([1,2,3])
        //   console.log(res)
    }
}