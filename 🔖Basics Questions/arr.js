var subsets = function (nums) {
    let result = [[]]
    for (i = 0; i < nums.length; i++) {

        result.forEach(a => {
            console.log("a->", a)

            let newAry = Array.from(a)

            console.log("new Arry 1->", newAry)

            newAry.push(nums[i])

            console.log("nums[i]->", nums[i])
            console.log("new ary 2->", newAry)

            result.push(newAry)

            console.log("res ->", result)
            console.log("-------------")
        })



    }
    return result
};
// console.log(subsets([1, 2, 3]))


