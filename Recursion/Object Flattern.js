// Flat a Object

let user = {
    fname: "Animesh",
    lname: "Dey",
    address: {
        home: {
            vill: "Contai",
            pin: 721445,
            mobile: [{ sim: 'voda', plan: 455, num: 8978784582 }, { sim: 'jio', plan: 'null', num: 9878784582 }]
        },
        office: {
            vill: "Egra",
            pin: 721429
        }
    }
}

let finalObj = {}
function flatObj(obj, parent) {
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            flatObj(obj[key], parent + "_" + key)
        } else {
            finalObj[parent + "_" + key] = obj[key]
        }
    }
    return finalObj
}

console.log(flatObj(user, "user"))