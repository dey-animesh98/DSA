//----------------------------------------------1
function tri1(n) {
    let stars = ""
    for (let r = 1; r <= n; r++) {
        for (let c = 1; c <= r; c++) {
            stars += "* "
        }
        stars += "\n"
    }
    console.log(stars)
}
// tri1(8)
//--------------------------------------------2
function revTri(n) {
    let stars = ""
    for (let r = n; r >= 1; r--) {
        for (let c = r; c >= 1; c--) {
            stars += "* "
        }
        stars += "\n"
    }
    console.log(stars)
}
// revTri(8)
//--------------------------------------------3
function revTri2(n) {
    let stars = "", k = 1
    for (let r = n; r >= 1; r--) {
        for (let c = r; c >= 1; c--) {
            stars += `${k++} `
        }
        k = 1
        stars += "\n"
    }
    console.log(stars)
}
// revTri2(8)
//----------------------------------------------4
function square(n) {
    let stars = ""
    for (let r = 1; r <= n; r++) {
        for (let c = 1; c <= n; c++) {
            stars += c + " "
        }
        stars += "\n"
    }
    console.log(stars)
}
// square(8)
//----------------------------------------------5
function pyramid(n) {
    let stars = ""
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < n - i; j++) {
            stars += "  "
        }
        for (let k = i; k >= 1; k--) {
            stars += k + " "
        }
        for (let l = 2; l <= i; l++) {
            stars += l + " "
        }
        stars += '\n'
    }
    console.log(stars)
}
// pyramid(5)
//----------------------------------------------6
function mirrorTri(n) {
    let pat = ""
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            pat += "*" + " "
        }
        pat += '\n'
    }
    for (let i = n - 1; i >= 1; i--) {
        for (let j = 1; j <= i; j++) {
            pat += "*" + " "
        }
        pat += '\n'
    }
    console.log(pat)
}
// mirrorTri(5)

//----------------------------------------------7
function revPyramid(n) {
    let stars = ""
    for (let i = n * 2 - 1; i >= 1; i++) {
        // for(let j = )
    }

    console.log(stars)
}
// revPyramid(5)
//----------------------------------------------8
function Pyramid2(n) {
    let pat = ""
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < n - i; j++) {
            pat += " "
        }
        for (let k = i; k >= 1; k--) {
            pat += "* "
        }
        pat += '\n'
    }
    console.log(pat)
}
// Pyramid2(10)
//----------------------------------------------9
function rombos(n) {
    let pat = ""
    for (let i = 1; i <= n; i++) {
        for (let j = n; j >= i; j--) {
            pat += " "
        }
        for (let k = 1; k <= n; k++) {
            pat += " *"
        }
        pat += '\n'
    }
    console.log(pat)
}
// rombos(8)
//----------------------------------------------10
function flipRombos(n) {
    let pat = ""
    for (let i = n; i >= 1; i--) {
        for (let j = n; j >= i; j--) {
            pat += " "
        }
        for (let k = 1; k <= n; k++) {
            pat += " *"
        }
        pat += '\n'
    }
    console.log(pat)
}
// flipRombos(8)
//----------------------------------------------11
function flipTri2(n) {
    let stars = ""
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < n - i; j++) {
            stars += "  "
        }
        for (let k = 0; k < i; k++) {
            stars += "* "
        }
        stars += "\n"
    }
    console.log(stars)
}
// flipTri2(8)
//----------------------------------------------12
function hollowSqr(n) {
    let stars = ""
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if ((i > 1 && i < n) && (j > 1 && j < n)) stars += "  "
            else stars += "* "
        }
        stars += '\n'
    }
    console.log(stars)
}
hollowSqr(8)

