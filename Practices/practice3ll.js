//singly ll

//node class
class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

//linked list class
class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    insertFront(data) {
        const node = new Node(data)
        if (!this.head) {
            this.head = node
            this.next = null
        } else {
            let oldHead = this.head
            this.head = node
            this.head.next = oldHead

        }
        this.size++
    }

    insertLast(data) {
        const node = new Node(data)
        let curr = null
        if (!this.head) {
            this.head = node
            this.next = null
        } else {
            curr = this.head
            while (curr.next) {
                curr = curr.next
            }
            curr.next = node
        }
        this.size++

    }

    insertMiddle(data, k) {
        const node = new Node(data)
        if (k > this.size || k <= 0) {
            throw Error("Invalid K")
        }else if (k === 1) {
           this.insertFront(data)
        }else {
            let curr = this.head
            let count = 1
           
            while (count < k-1) {
                curr = curr.next
                count++
            }
            console.log("curr",curr)
            let x = curr.next
            curr.next = node
            node.next = x

            this.size++
        }

    }

    printList() {
        let curr = this.head
        while (curr) {
            console.log(curr.data)
            console.log(curr)
            curr = curr.next
        }
    }

    printSize() {
        console.log(`Size of list`, this.size)
    }
}


const obj1 = new LinkedList()
obj1.insertFront(1)
obj1.insertFront(2)
obj1.insertFront(3)
obj1.insertLast(8)
obj1.insertLast(9)
obj1.insertMiddle(7, 1)
obj1.insertMiddle(10, 6)

obj1.printList()
obj1.printSize()