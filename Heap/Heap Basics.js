/**
 * 
 * ***********************************Heap*******************************
 * 
 * =>Heap mapping is a tree like data structure with some special properties.
 * => Two types of heap 1. Max Heap 2. Min Heap
 * => Max heap always in descending order (top - down)- the parent /root node element always greater than child node element
 * => Min heap is vice versa of max heap
 * 
 * => Leave Should be at Height  h and h-1 
 * => Max height - min height <= 1 // valid Heap
 * 
 * T.C=> Max Heap 
 * Find Max Element -> O(1)
 * Remove element -> O(log n)
 * Add element -> O(log n)
 * 
 * Explanation: 2^h -2
 * h = (log2 n) ->O(log n)
 * 
 * 
 * 
 * T.C=> Min Heap 
 * Find Min Element -> O(1)
 * Remove element -> O(log n)
 * Add element -> O(log n)
 * 
 * 
 * Use case=>
 * -> Shortest Time first Algo in OS
 * -> Distra -> i.r Priority Queue
 * -> Hoffman Coding-> Compression Algo (Greedy Algo)
 * -> Kth max Element
 */

class Heap {
    constructor() {
        this.heap = []
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }

    getParent(curr) {
        return Math.ceil(curr / 2) - 1
    }

    heapify(curr) {
        let parent = this.getParent(curr)
        let arr = this.heap

        while (parent >= 0 && arr[parent] < arr[curr]) {
            [arr[parent], arr[curr]] = [arr[curr], arr[parent]]
            curr = parent
            parent = this.getParent(curr)
        }
    }

    insert(val) {
        this.heap.push(val)
        let curr = this.getSize()
        this.heapify(curr)
        this.size++
    }

    getMax() {
        return this.heap[0]
    }

    getLeftChild(curr) {
        return 2 * curr + 1
    }

    getRightChild(curr) {
        return 2 * curr + 2
    }

    heapifyMax(i) {
        let curr = i
        let l = this.getLeftChild(curr)
        let r = this.getRightChild(curr)
        let arr = this.heap
        let n = this.getSize()
        let largest = i //root

        if (l < n && arr[l] > arr[largest]) {
            largest = l
        }

        if (r < n && arr[r] > arr[largest]) {
            largest = r
        }

        if (largest != curr) {
            [arr[curr], arr[largest]] = [arr[largest], arr[curr]]
            this.heapifyMax(largest)
        }

    }

    remove() {
        if (this.isEmpty()) {
            throw Error("Empty Heap")
        }

        let currVal = this.heap[0]
        this.heap[0] = this.heap[this.getSize() - 1]
        this.heap.pop()
        this.size--
        this.heapifyMax(0)

        return currVal
    }

    printEle() {
        let curr = 0
        while (curr < this.getSize()) {
            console.log(this.heap[curr]);
            curr++
        }
    }
}

const heap = new Heap()

const input = [10, 20, 30, 40, 50]

input.forEach(element => {
    heap.insert(element)
});

// console.log(heap.getSize())
// heap.printEle()
// console.log(heap.getMax())
// console.log(heap.getMin())
console.log(heap.remove())
console.log(heap.remove())
console.log(heap.remove())
console.log(heap.remove())
console.log(heap.remove())


//For min heap
// const heap = new Heap((a,b)=>a<b)