
/**
 * Given two strings S1 and S2, write a program to find the character which has the maximum occurrence in the
first string S1 and check whether that particular character is present in the second string S2 the same number
of times as it is present in the first string S1.
Input:
 hello world
 albcllsyaaaaaaaa
 where:
First line represents S1
Second line represents S2
Output:
 Yes
Explanation:
'l' has highest frequency of 3 in S1 and it appears 3 times in S2.

 */
{
    function solution(a, b) {
        //Write your solution here
        let map = new Map()
        for (let ele of a) {
            map.set(ele, map.get(ele) + 1 || 1)
        }
        let max = null, count = 0
        for (let pairs of map) {
            if (pairs[1] > count) {
                count = pairs[1]
                max = pairs[0]
            }
        }

        let map2 = new Map(), newCount = 0
        for (let ele of b) {
            if (!map2.get(ele)) {
                if (ele === max) {
                    newCount++
                }
            }
        }
        if (count === newCount) {
            return "Yes"
        }
        return "No"
    }
    console.log(solution(" hello world", "albcllsyaaaaaaaa"))
}

{
    function solution(a, b) {
        //Write your solution here
        let map = new Map()
        let char = null, count = 0, max = 0
        for (let ele of a) {
            if (map.has(ele)) {
                map.set(ele, map.get(ele) + 1)
            } else {
                map.set(ele, 1)
            }
            if (map.get(ele) > max) {
                char = ele
                max = map.get(ele)
            }
        }
        for (let ele of b) {
            if (ele === char) count++
        }
        if (count === map.get(char)) {
            return "Yes"
        }
        return "No"

    }
    console.log(solution(" hello world", "albcllsyaaaaaaaa"))
}
