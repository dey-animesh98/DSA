
class Node {
    constructor(data) {
        this.data = data
        this.next = null
        this.prev = null
    }
}

class DLL {
    constructor() {
        this.head = null
        this.size = 0
    }

    insertFront(data) {
        let node = new Node(data)
        if (!this.head) {
            this.head = node
        } else {
            node.next = this.head
            this.head.prev = node
            this.head = node

        }
        this.size++
    }

    insertEnd(data) {
        let node = new Node(data)
        if (!this.head) {
            this.head = node
        } else {
            let curr = this.head
            while (curr.next) {
                curr = curr.next.next
            }
            node.prev = curr
            curr.next = node
            node.next = null
        }

        this.size++
    }

    insertMid(data, k) {
        let node = new Node(data)

        if (k > this.size || k < 1) throw Error("K Size Invalid")

        if (k === 1) {
            return this.insertFront(data)
        } else {
            let curr = this.head
            let count = 1

            while (count < k) {
                count++
                curr = curr.next
            }
            let temp = curr.prev
            curr.prev = node
            node.next = curr
            node.prev = temp
            temp.next = node
            this.size++
        }
    }

    deleteFront() {
        if (!this.head) {
            throw Error("Empty List")
        }
        let curr = this.head
        this.head = curr.next
        curr.next = null
        this.head.prev = null
        this.size--
    }

    deleteEnd() {
        if (!this.head) {
            throw Error("Empty List")
        }

        if (this.size === 1) {
            this.head = null
        } else {
            let curr = this.head

            while (curr.next) {
                curr = curr.next.next
            }
            curr.prev.next = null
            curr.prev = null
        }

        this.size--
    }

    



    printList() {
        let curr = this.head
        // console.log(this.head)
        while (curr) {
            console.log(curr.data)
            curr = curr.next
        }
    }
}

let dl = new DLL()

dl.insertFront(10)
dl.insertFront(20)
dl.insertFront(30)
// dl.insertEnd(5)
// dl.insertMid(25, 4)
// dl.insertMid(15, 3)
dl.printList()


console.log("---")
// dl.deleteFront()
dl.deleteEnd()
dl.printList()