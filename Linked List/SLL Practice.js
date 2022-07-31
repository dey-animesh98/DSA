// Singly Linked List
// Defining Node 

class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class SLL {
    constructor() {
        this.head = null
        this.size = 0
    }

    //Adding the element in front of head 
    addFront(data) {
        const newNode = new Node(data)

        //if list is empty new node will be head node
        if (!this.head) {
            this.head = newNode
        } else {
            let curr = this.head
            this.head = newNode
            newNode.next = curr
        }
        this.size++
    }

    addEnd(data) {
        const newNode = new Node(data)

        //if list is empty new node will be head node
        if (!this.head) {
            this.head = newNode
        } else {
            let curr = this.head
            while (curr.next) {
                curr = curr.next
            }
            curr.next = newNode
        }
        this.size++
    }

    addMid(data, k) {
        if (!this.head) throw TypeError('List is Empty')
        if (k > this.size || k <= 0) throw RangeError('Invalid Position')
        if (k === 1) return this.addFront(data)

        const newNode = new Node(data)
        let curr = this.head
        let count = 1

        while (count < k - 1) {
            count++
            curr = curr.next
        }
        newNode.next = curr.next
        curr.next = newNode
        this.size++

    }

    printList() {
        let curr = this.head
        if (!curr) return console.log(['Empty List'])

        let nodes = []
        while (curr) {
            // console.log(curr)
            nodes.push(curr.data)
            curr = curr.next
        }
        console.log(nodes.join(' -> '))
    }

    // Upadte the existing Node data
    updateNodeData(data, k) {
        const newNode = new Node(data)
        let curr = this.head
        let count = 1
        while (count < k) {
            count++
            curr = curr.next
        }
        curr.data = newNode.data
    }

    deleteFront() {
        if (!this.head) throw TypeError('List is Empty')

        let curr = this.head
        this.head = curr.next
        curr.next = null
        this.size--
    }

    deleteMid(k) {
        if (!this.head) throw TypeError('List is Empty')
        if (k > this.size || k <= 0) throw RangeError('Invalid Position')
        if (k === 1) return this.deleteFront()

        let count = 1
        let curr = this.head
        while (count < k - 1) {
            curr = curr.next
            count++
        }
        let temp = curr.next
        curr.next = curr.next.next
        temp.next = null
        this.size--

        if (this.size === 0) this.head = null

    }

    deleteEnd() {
        if (!this.head) throw TypeError('List is Empty')
        let curr = this.head
        while (curr.next && curr.next.next) {
            curr = curr.next
        }

        curr.next = null
        this.size--

        if (this.size === 0) this.head = null

    }

    peekElement(position) {
        if (!this.head) throw TypeError('List is Empty')
        if (position > this.size || position <= 0) throw RangeError('Invalid Position')

        let curr = this.head
        let count = 1
        while (count < position) {
            curr = curr.next
            count++
        }
        return console.log(`Your Data is here -> ${curr.data}`)

    }

    reverseList() {
        if (!this.head) throw TypeError('List is Empty')

        let curr = this.head
        let prev = null

        while (curr) {
            let temp = curr.next
            curr.next = prev
            prev = curr
            curr = temp
        }

        this.head = prev
        return prev
    }

    // makeLoop() {
    //     if (!this.head) throw TypeError('List is Empty')

    //     let curr = this.head
    //     while (curr.next) {
    //         curr = curr.next
    //     }
    //     // curr.next = this.head
    // }

    detectCycle() {
        let slow = this.head
        let fast = this.head

        while (fast && fast.next) {
            slow = slow.next
            fast = fast.next.next

            if (slow === fast) {
                return console.log(true)
            }
        }
        return console.log(false)

    }

    midOfLL() {
        let slow = this.head
        let fast = this.head

        while (fast && fast.next) {
            slow = slow.next
            fast = fast.next.next

        }
        return console.log(`Mid node of the LL -> ${slow.data}`)
    }

    isPalindrome() {
        

    }


    printSize() {
        console.log(`Size of SLL -> ${this.size}`)
    }

    printHead() {
        if (!this.head) return console.log(`Head Node is ${null}`)
        console.log(`Head Node -> ${this.head.data}`)
    }

    isEmpty() {
        console.log(`List is ${this.size === 0 ? 'Empty' : 'Not Empty'}`)
        return this.size === 0

    }

}

const list1 = new SLL()

let arr = [1, 2, 3, 2, 1]

arr.forEach(ele => list1.addEnd(ele))
// list1.addFront(15)
// list1.addFront(10)
// list1.addFront(5)
// list1.addEnd(20)
// list1.addEnd(25)
// list1.addEnd(30)
list1.addMid(18, 3)
list1.printList()
list1.printSize()
list1.printHead()
list1.isEmpty()
console.log('---')
// list1.deleteFront()
// list1.printList()

// console.log('---')
// list1.deleteEnd()
// list1.printList()

// console.log('---')
// list1.deleteMid(7)

// list1.peekElement(2)
// list1.reverseList()

// list1.detectCycle()
// list1.printList()
// list1.printSize()
// list1.printHead()
// list1.isEmpty()
// list1.midOfLL()

// list1.isPalindrome()

// list1.updateNodeData(50, 1)