{
    const node1 = {
        val: 100
    }
    const node2 = {
        val: 200
    }
    const node3 = {
        val: 300
    }
    const node4 = {
        val: 400
    }
    node1.next = node2
    node2.next = node3
    node3.next = node4

    // console.log(node1)
}

{

    //Classes
    class Node {
        constructor(data, next = null) {
            this.data = data
            this.next = next
        }
    }

    let node1 = new Node(10)
    let node2 = new Node(20)
    let node3 = new Node(30)

    node1.next = node2
    node2.next = node3

}
