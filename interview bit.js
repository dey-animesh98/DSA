 function palindrome(word) {
    let start = 0, end = word.length - 1
    while (start < end) {
        if (word[start] === word[end]) {
            start++
            end--
        } else {
            return false
        }
    }
    return true
}
 function solve (A) {
 A = A.split(' ')
    count = 0
    for (let ele of A) {
        let check = palindrome(ele)
        if (check) count++
    }
    return count
}

// console.log(solve('the fastest racecar'))


 function fine (A, B, C) {

    let total = 0
    if (B % 2 === 0) {
        for (let i = 0; i < A.length; i++) {
            if (A[i] % 2 !== 0) {
                total += C
            }
        }
    } else if (B % 2 === 1) {
        for (let i = 0; i < A.length; i++) {
            if (A[i] % 2 === 0) {
                total += C
            }
        }
    }
    return total
}

let A = [1,2,3]
let B = 31
let C = 100

// console.log(fine(A,B,C))


{
     function pass(A){
    
        let pass = A.join('')
            let reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#@$%&*!$]).{8,15}$/
            
            if(reg.test(pass)){
                return 1
            }else{
                return 0
            }
    
        }

        // console.log(pass(['S', 'c', 'a', 'l', 'e', 'r', '', '1']))
}

 function invertion (A) {

    A = A.split('')
    for (let i = 0; i < A.length; i++) {
        if (A[i].charCodeAt(0) >= 65 && A[i].charCodeAt(0) <= 90) {
            A[i] = A[i].toLowerCase()
        } else if (A[i].charCodeAt(0) >= 97 && A[i].charCodeAt(0) <= 122) {
            A[i] = A[i].toUpperCase()
        }
    }
    return A.join('')
}

// console.log(invertion('iNtErVie'))
let c  =0

while (c != 5) {
    c += 0.2
    console.log('a',c)
}

