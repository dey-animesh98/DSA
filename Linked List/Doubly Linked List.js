//T.C
// Insert Front O(1)
// Insert End O(1)
// Insert middle O(1)  & for Searching O(n) => O(n)
// If target is known then we can insert at middle in O(1) => Because Serching time will be eliminate


// Delete Front O(1)
// Delete End O(1)
// Delete middle O(1) & for searching O(n) => O(n)
// If target is known then we can delete at middle in O(1) => Because Serching time will be eliminate


//Doubly Linked list
class DNode {
    constructor(data, prev = null, next = null) {
        this.data = data
        this.next = next
        this.prev = prev
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    insertFront(data) {
        const dNode = new DNode(data)

        if (!this.head) {
            this.head = dNode
            this.tail = dNode
        } else {
            dNode.next = this.head
            this.head.prev = dNode
            this.head = dNode

        }

        this.size += 1
    }

    insertEnd(data) {
        const dNode = new DNode(data)
        //If empty this will be fisrt node
        if (!this.tail) {
            this.head = dNode
            this.tail = dNode
        }

        this.tail.next = dNode
        dNode.prev = this.tail
        this.tail = dNode
        this.size += 1
    }


    insertMiddle(data, k) {
        if (this.size < k) {
            throw Error('Invalid Input K size')
        }

        if (this.size === k) {
            this.insertEnd(data)

        } else {
            const dNode = new DNode(data)
            let count = 1
            let curr = this.head

            while (count !== k) {
                curr = curr.next
                count++
            }

            let nextNode = curr.next
            curr.next = dNode
            dNode.prev = curr
            dNode.next = nextNode
            nextNode.prev = dNode
            this.size += 1

        }
    }




    deleteFront() {
        if (!this.head) {
            throw Error("Invalid Input Empty List")
        }

        if (this.size === 1) {
            this.head = null
            this.tail = null
        } else {
            let temp = this.head
            this.head = this.head.next
            this.head.prev = null
            temp.next = null
        }
        this.size -= 1
    }


    deleteEnd() {
        if (!this.head) {
            throw Error("Invalid Input Empty List")
        }

        if (this.size === 1) {
            this.deleteFront()
        } else {
            let secondlast = this.tail.prev
            secondlast.next = null
            this.tail.prev = null
            this.tail = secondlast
        }

        this.size -= 1
    }

    deleteMiddle(k) {
        if (!this.head) {
            throw Error("Invalid Input Empty List")
        }

        if (this.size < k) {
            throw Error("Invalid Input k size")
        }

        if (this.size === k) {
            this.deleteEnd()

        } else if (k === 1) {
            this.deleteFront()
        } else {
            let count = 1
            let curr = this.head

            while (count !== k) {
                curr = curr.next
                count++
            }

            let nextNode = curr.next
            let prevNode = curr.prev

            prevNode.next = curr.next
            nextNode.prev = curr.prev

            //curr.prev.next = curr.next
            //curr.next.prev = curr.prev

            curr.next = null
            curr.prev = null

            this.size -= 1

        }

    }

    printList() {
        let curr = this.head
        while (curr) {
            console.log(curr)
            curr = curr.next
        }
    }

}


const dList = new DoublyLinkedList()
dList.insertFront(5)
dList.insertFront(4)
dList.insertFront(3)

dList.insertEnd(10)
// dList.insertEnd(11)
// dList.insertEnd(12)

// dList.insertMiddle(7, 3)

dList.printList()
//---------Deletion--------//
console.log(">>>>>>")
// dList.deleteFront()
// dList.printList()

console.log(">>>>>>")
// dList.deleteEnd()
// dList.printList()

// console.log(">>>>>>")

// dList.deleteMiddle(2)
// dList.printList()


 