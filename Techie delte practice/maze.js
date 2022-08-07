//count the no of paths to reach the position using only right & down moves
function mazePath(r, c) {
    if (r === 1 || c === 1) {
        return 1
    }

    let left = mazePath(r - 1, c)
    let right = mazePath(r, c - 1)
    return left + right
}

// console.log(mazePath(4, 4))


//printing the path

function path(p, r, c) {
    if (r === 1 && c === 1) {
        console.log(p)
        return
    }

    if (r > 1) {
        path(p + "R", r - 1, c)
    }

    if (c > 1) {
        path(p + "D", r, c - 1)
    }
}

// path('', 4, 3)

//Diagonal path
function pathDiagonal(p, r, c) {
    if (r === 1 && c === 1) {
        console.log(p)
        return
    }

    if (r > 1) {
        pathDiagonal(p + "R", r - 1, c)
    }

    if (c > 1) {
        pathDiagonal(p + "D", r, c - 1)
    }

    if (c > 1 && r > 1) {
        pathDiagonal(p + "A", r - 1, c - 1)
    }
}

// pathDiagonal('', 3, 3)


//Maze with restrictions

function mazeRestrictions(p, maze, r, c) {
    if (r == maze.length - 1 && c == maze[0].length - 1) {
        console.log(p)
        return
    }

    if (!maze[r][c]) {
        return
    }

    if (r < maze.length - 1) {
        mazeRestrictions(p + 'V', maze, r + 1, c)
    }

    if (c < maze[0].length - 1) {
        mazeRestrictions(p + 'H', maze, r, c + 1)
    }
}

let maze = [
    [true, false, true],
    [true, false, true],
    [true, true, true],
    [true, false, true]
]

mazeRestrictions('', maze, 0, 0)

