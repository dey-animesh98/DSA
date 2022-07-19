/**
 * Graphs 1. Directed 2.Undirect
 * 
 * Graph with no cycle is called tree
 * 
 * Both Direction & Uni Direction
 * Weightage Graph
 * 
 * Real life example:Google Map, Routing, Freind Suggestion
 * Airline routes
 * 
 * Degree of vertex / Vertices
 * 
 * Complete Graph
 * 
 * Joint set of tree is called Forest//this also a graph
 * 
 * Adjacency List
 * Adjacncy MAtrix
 * https://www.youtube.com/watch?v=cWNEl4HE2OE
 */

class Graph {
    constructor(vertices) {
        this.vertices = vertices
        //representing whole graph
        this.adjList = new Map()  //key: vertices , value: edges
    }
   

    addVertex(v) {
        // Vetices in graph
        this.adjList.set(v, [])
    }

    addEdge(v, target) {
        // direction v to target
        this.adjList.get(v).push(target)
        // direction target to v
        this.adjList.get(target).push(v)
    }

    printGraph() {
        const keys = this.adjList.keys()
        for (let key of keys) {
            console.log(key, '->', this.adjList.get(key))
        }
    }


}

const graph = new Graph(5)

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')

graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('A', 'E')
graph.addEdge('B', 'E')
graph.addEdge('B', 'D')
graph.addEdge('C', 'E')
graph.addEdge('C', 'D')

graph.printGraph()