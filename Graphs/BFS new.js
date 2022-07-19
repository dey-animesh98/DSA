// const Queue = require('../Stacks & Queues/Queues in Linked List').Queue
class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    appendEle(data) {
        const node = new Node(data)

        if (!this.head) {
            this.head = node
            this.tail = node

        } else {
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }

    removeEle() {
        if (!this.size === 0) throw Error("Empty Stack")

        let curr = this.head
        this.head = curr.next

        curr.next = null
        this.size--
        return curr.data

    }
}

class Queue {

    constructor() {
        this.list = new LinkedList()
    }
    enQueue(data) { //Adding ele
        this.list.appendEle(data)
    }

    deQueue() {
        return this.list.removeEle()
    }

    getSize() {
        return this.list.size
    }

    frontEle() {
        return this.list.head.data
    }

    isEmpty() {
        return this.list.size === 0
    }
}

//-----------
class Graph {
    constructor(noofVertices) {
        this.noofVertices = noofVertices
        // represent all connection of graph
        this.adjList = new Map();
    }

    addVertex(v) {
        // add vertex in graph
        this.adjList.set(v, []);
    }

    addEdge(v, target) {
        // direction v to target
        this.adjList.get(v).push(target)
        // direction target to v
        this.adjList.get(target).push(v) //Remove this to directed grpah
    }

    print() {
        console.log(this.adjList)
        //     const keys = this.adjList.keys()
        //     for (let key of keys) {
        //         console.log(key, "->", this.adjList.get(key))
        //     }
    }

    // bfs(vertex, visited = {}) {
    //     const queue = new Queue()
    //     queue.enQueue(vertex)
    //     visited[vertex] = true

    //     while (!queue.isEmpty()) {
    //         const ele = queue.deQueue()
    //         console.log(ele)

    //         const vertices = this.adjList.get(ele)

    //         for (let vert of vertices) {
    //             if (!visited[vert]) {
    //                 queue.enQueue(vert)
    //                 visited[vert] = true
    //             }
    //         }
    //     }
    // }

    //Implement using array
    bfs(vertex, visited = {}) {
        const queue = []
        queue.push(vertex)
        visited[vertex] = true

        while (queue.length) {
            const ele = queue.shift()
            console.log(ele)

            const vertices = this.adjList.get(ele)
            for (let vert of vertices) {
                if (!visited[vert]) {
                    queue.push(vert)
                    visited[vert] = true
                }
            }
        }
    }

    bft() {
        let visited = {}
        let DisconnectedCount = 0
        for (let key of this.adjList.keys()) {
            // console.log(key)
            if (!visited[key]) {
                DisconnectedCount++
                this.bfs(key, visited)
            }
        }
        console.log(DisconnectedCount)
    }

    dfs(vertex, visited = {}) {
        visited[vertex] = true
        console.log(vertex)
        for (let vert of this.adjList.get(vertex)) {
            if (!visited[vert]) {
                this.dfs(vert, visited)
            }
        }
    }

    dft() {
        

    }
}

const graph = new Graph()

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")
graph.addVertex("G")
graph.addVertex("H")


graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('A', 'D')
graph.addEdge('B', 'E')
graph.addEdge('C', 'F')
graph.addEdge('D', 'E')
graph.addEdge('D', 'F')
graph.addEdge('E', 'H')
graph.addEdge('E', 'F')
graph.addEdge('F', 'G')



// graph.bfs("A")
// console.log("-----")
// graph.bft()
// console.log("-----")
graph.dfs("A")
// console.log("-----")
// graph.print()

//Adjacency List - T.C -> O(v+e)