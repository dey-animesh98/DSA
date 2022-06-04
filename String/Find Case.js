//check first letter of the string whether it is upperCase or lowerCase (ASCII Table)
function checkCase(a){
    let str = a.trim().charAt(0)
    if(str >= 'a' && str <= 'z'){
        return 'LowerCase'
    }else{
        return 'UpperCase'
    }
}
console.log(checkCase('javasricpt'))