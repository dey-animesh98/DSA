function getObjKey(obj, value) {
    return Object.keys(obj).find(key => obj[key] === value);
  }
  
  const obj = {country: 'Chile', city: 'Santiago'};
  
  //console.log(getObjKey(obj, 'Chile')); // 👉️ "country"


  {
    let obj ={}
    let arr = [2,3,6]
    let num = 50, str = "anb"
    obj[arr[2]] = "ab"
    console.log(obj)
  }
  
  //Primitive
  // let a = "ab"
// console.log(a)

// let b = a
// console.log(b)

// a = "cd"

// console.log(a)
// console.log(b)


//Non- Primitive

let x = {
  nam : "aka",
  age : 21
}
console.log(x)


let y = x
console.log(y)

x.nam = "paka"
x.city = "kol"

console.log(x)
console.log(y)