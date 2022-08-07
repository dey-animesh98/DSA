
{
    function dice(p, target,face) {
        //   if(target > 6) return false  
        if (target === 0) {
            console.log(p)
            return
        }
        for (let i = 1; i <= face && i <= target; i++) {
            dice(p + i, target - i,face)
        }
    }
    dice('', 6,8)
}

{
    let count = 0
    function dice(n, p, target, face) {
        //   if(target > 6) return false  
        if (target === 0) {
            if (p.length === n) count++
            return
        }
        for (let i = 1; i <= face && i <= target; i++) {
            dice(n, p + i, target - i, face)
        }
        return count
    }
    // console.log(dice(2, '', 3, 6))
}

{
    let count = 0
    function helper(n, k, p, target) {
        if (target === 0) {
            if (p.length === n) count++
            return
        }

        for (let i = 1; i <= k && i <= target; i++) {
            helper(n, k, p + i, target - i)
        }
        return count
    }
    var numRollsToTarget = function (n, k, target) {
        return helper(n, k, '', target)
    };
}