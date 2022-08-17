function pyramid(n) {
    let string = "";
    // External loop
    for (let i = 1; i <= n; i++) {
        // printing spaces
        for (let j = 1; j <= n - i; j++) {
            string += " ";
        }
        // printing star
        for (let k = 0; k < 2 * i - 1; k++) {
            string += "*";
        }
        string += "\n";
    }
    console.log(string)
}
// pyramid(5)
//---------------------------------------------------------//
function pyramidRev(n) {
    let string = ""

    for (let i = n; i >= 1; i--) {
        for (let j = n + i; j >= 1; j--) {
            string += " "
        }
        for (let k = 0; k < 2 * i - 1; k++) {
            string += "*";
        }
        string += "\n";
    }
    console.log(string)
}
// pyramidRev(5)
//---------------------------------------------------------//

function tri(n) {
    let string = "";
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= n - i; j++) {
            string += "*";
        }

        for (let k = 0; k < 2 * i - 1; k++) {
            string += " ";
        }
        string += "\n";
    }
    console.log(string)
}
// tri(6)
//---------------------------------------------------------//
function pyramidRev2(n) {
    let string = ""

    for (let i = n; i >= 1; i--) {
        for (let j = n + i; j >= 1; j--) {
            string +="*"
        }
        for (let k = 2 * i-1 ; k >= 0; k--) {
            string += " ";
        }
        string += "\n";
    }
    console.log(string)
}
pyramidRev2(5)