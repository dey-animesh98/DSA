class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

class BST {
    constructor() {
        this.root = null
    }

    insert(val) {
        const newNode = new Node(val)
        if (!this.root) {
            this.root = newNode
            return this
        } else {
            let curr = this.root
            while (true) {
                if (val === curr.val) return 'undefined'
                if (val < curr.val) {
                    if (!curr.left) {
                        curr.left = newNode
                        return this
                    } else {
                        curr = curr.left
                    }
                } else if (val > curr.val) {
                    if (!curr.right) {
                        curr.right = newNode
                        return this
                    } else {
                        curr = curr.right
                    }
                }
            }
        }
    }
    find(ele) {
        if (!this.root) return -1
        let curr = this.root
        let found = false
        while (curr && !found) {
            if (ele < curr.val) {
                curr = curr.left
            } else if (ele > curr.val) {
                curr = curr.right
            } else {
                return curr
            }
        }
        return -1
    }

    BFS() {
        let curr = this.root
        let visited = []
        let que = []

        que.push(curr)
        while (que.length) {
            curr = que.shift()
            visited.push((curr.val))
            if (curr.left) que.push(curr.left)
            if (curr.right) que.push(curr.right)
        }
        return visited
    }

    DFSPreOrder() {
        let curr = this.root
        let res = []
        function traverse(node) {
            res.push(node.val)
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
        }
        traverse(curr)
        return res
    }

    DFSPostOrder() {
        let curr = this.root
        let res = []
        function traverse(node) {
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
            res.push(node.val)
        }
        traverse(curr)
        return res
    }

    DFSInOrder() {
        let curr = this.root
        let res = []
        function traverse(node) {
            if (node.left) traverse(node.left)
            res.push(node.val)
            if (node.right) traverse(node.right)
        }
        traverse(curr)
        return res
    }
}


const bst = new BST()
const arr = [20, 26, 21, 12, 32, 15, 22, 11, 9, 35, 18, 13]
arr.forEach(e => bst.insert(e))

// console.log(bst.find(10))
// console.log(bst.BFS())
// console.log(bst.DFSPreOrder())
// console.log(bst.DFSPostOrder())
console.log(bst.DFSInOrder())



