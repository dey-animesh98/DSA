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
  