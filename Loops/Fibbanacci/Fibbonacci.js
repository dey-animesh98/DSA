// function fibbo(n){
//     let a = 0
//     let b= 1
//     let count 
//     while(count<=n){
//       a=b
//       b=count
//       count = a+b
//     }
//     return count
// }
// // console.log(fibbo(5))
// //While Loop
// {
// const number = 10
// let n1 = 0, n2 = 1, nextTerm =2;
// nextTerm = n1 + n2;
// while (nextTerm <= number) {
//     // console.log(nextTerm);
//     n1 = n2;
//     n2 = nextTerm;
//     nextTerm = n1 + n2;
// }
// // console.log(nextTerm)
// }

// //For Loop
// {
// const number = 10
// let n1 = 0, n2 = 1, nextTerm;
// for (let i = 1; i <= number; i++) {
//     // console.log(n1);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
// }
// // console.log(nextTerm)
// }


// Manual Input By user
{
    const number = parseInt(prompt('Enter the number of terms: '));
    let n1 = 0, n2 = 1, nextTerm;
    
    console.log('Fibonacci Series:');
    
    for (let i = 1; i <= number; i++) {
        console.log(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
}

console.log(2)