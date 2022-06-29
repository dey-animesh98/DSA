//=====String swap-2
// {


// }

let a = "hi";
let b = "there";
[a, b] = [b, a]

// console.log(a, b)

{
    let a = "world", b = "hello";
    b = [a, a = b][0];

    console.log(a, b); // Hello world
}