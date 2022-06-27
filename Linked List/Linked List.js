///-----------------------///Main Linked List 
//LinkedList
{
    class Node {
        constructor(data, next = null) {
            this.data = data
            this.next = next
        }
    }

    class LinkedList {
        constructor() {
            this.head = null
            this.tail = null
            this.size = 0
        }

        //INSERTION OF NODE

        //Inserting First Node
        insertFirst(data) {
            const node1 = new Node(data)

            //If list is empty
            if (!this.head) {
                this.head = node1
                this.tail = node1
            } else {
                let temp = this.head
                this.head = node1
                node1.next = temp
            }
        }
        //Inserting Last Node
        insertLast(data) {
            const node2 = new Node(data)
            if (!this.head) {
                this.head = node2
                this.tail = node2
            } else {
                this.tail.next = node2
                this.tail = node2
            }
        }

        //Inserting Middle Node
        insertMiddle(data, position) {
            let count = 1
            let curr = this.head
            while (curr && count !== position) {
                curr = curr.next
                count++
            }

            if (!curr && count !== position) {
                console.log("Invalid Position")
                throw Error("Invalid Position");

            } else if (!curr && count === position) {
                this.insertLast(data)
            } else {
                const node3 = new Node(data)
                node3.next = curr.next
                curr.next = node3
            }
        }

        //DELETION OF NODE

        //Delete from front
        deleteFront() {
            if (!this.head) {
                throw Error("No Data. Empty Node")
            }
            let temp = this.head
            this.head = this.head.next
            temp.next = null
            if (!this.head) {
                this.tail = null
            }
        }
        //Delete from Last
        deleteLast() {
            if (!this.head) {
                throw Error("No Data. Empty Node")
            }
            let curr = this.head
            while (curr.next !== this.tail) {
                curr = curr.next
            }
            curr.next = null
            this.tail = curr
        }
        //Delete from middle
        deleteMiddle(position) {
            if (!this.head) {
                throw Error("No Data. Empty Node")
            }
            if (position === 1) {
                this.deleteFront()
            }
            let count = 1
            let curr = this.head
            while (curr && count !== position - 1) {
                curr = curr.next
                count++
            }
            if (!curr) {
                console.log("Invalid Position")
                throw Error("Invalid Position")
            } else {
                let targetNode = curr.next
                curr.next = targetNode.next
                targetNode.next = null

                //If Position is last nodde
                if (!curr.next) {
                    this.tail = curr
                }
            }
        }

        // Print Data
        printList() {
            let curr = this.head
            while (curr) {
                console.log(curr.data)
                curr = curr.next
            }
        }
    }

    const list = new LinkedList()
    list.insertFirst(10)
    list.insertFirst(11)
    list.insertFirst(12)
    list.insertLast(9)
    list.insertLast(8)
    list.insertLast(7)
    list.printList()

    console.log(">>>>>>")

    // list.deleteFront()
    // list.deleteLast()
    // list.deleteMiddle(10)
    // list.printList()
}


//TIME COMPLEXITY
// Linked List
//Insertion - Front > O(1) , Last > O(1), Middle > O(n)
//Deletion - Front > O(1) , Last > O(n), Middle > O(n)

//Array
//Insertion - Front > O(n) , Last > O(1), Middle > O(n)
//Deletion - Front > O(n) , Last > O(1), Middle > O(n)

