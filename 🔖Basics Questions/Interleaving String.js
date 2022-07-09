

/*
Given three strings S1, S2 and S3. Write a program that checks whether S3 is an interleaving of S1 and S2. 
S3 is said to be an interleaving of S1 and S2 if it contains all characters of S1 and S2 and order of all characters in individual strings is preserved.

Input:
    AB
    CD
    ACBD
    Output:
    Yes
---
Input
AB
CD
ABCG
Expected Output 
No
---
Input
ABCD
EFGH
ADEFGHBC
Expected Output 
No
---
Input
AAAAA
BBBBB
ABBAAABBAB
Expected Output 
Yes
----
First line represents input string S1
Second line represents input string S2
Third line represents input string S3
 

 */

function solution(s1, s2, s3) {
    let i = 0, j = 0, k = 0

    while (k < s3.length) {
        if (i < s1.length && s1[i] === s3[k]) {
            i++
        } else if (j < s2.length && s2[j] === s3[k]) {
            j++
        } else {
            return "No"
        }
        k++
    }
    if (i < s1.length || j < s2.length) {
        return "No"
    } else {
        return "Yes"
    }
}

console.log(solution("AC", "DE", "ADCE"))