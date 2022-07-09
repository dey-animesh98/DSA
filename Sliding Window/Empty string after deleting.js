/**
 * 
 * Given a string S1 and another string S2, find whether S1 can become empty by deleting S2 from S1 again and again.
 *  You are allowed to delete S2 from S1 any number of times.

Input:
    cocodede
    code
 --
 cocodeed
code
--
hohohowwwhow
how
--
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
a


Output:
    Yes

Explanation:
In the string S1= "cocodede", we can first delete the substring "code". S1 now becomes "code". We can again delete sub-string "code". Now the string S1 becomes empty.
 */

// function emptyString(s1, s2) {
//     s1 = s1.split('')
//     s2 = s2.split('')
//     let high = 0, low = 0, start = 0

//     while (high < s1.length) {
//         if (s1[high] === s2[low]) {
//             low++
//             high++
//             if (low === s2.length ) {
//                 s1.splice(start, s2.length)
//                 high = 0
//                 low = 0
//             }
//         } else {
//             // high++
//             start = high
//             low = 0
//         }
//     }

//     return s1.length === 0
// }


// console.log(emptyString('cocodeed', 'code'))

{
    function emptyStr(s1,s2) {
        const reg = new RegExp(s2)

        while (reg.test(s1)) {
          s1 = s1.replace(s2, "")
        }
        return s1.length === 0

    }
    console.log(emptyStr('hohohowwwhow', 'how'))
}


