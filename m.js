
//memory leak
for (let i = 0; i < 10; i++) {
    const { rss, heapTotal, external } = process.memoryUsage()
    console.log(i, rss, heapTotal, external)
}


//rss-> Resident Set Size=> The amount of RAM the node process is consuming including everything like application,frameworks, libraries etc
//HeapTotal=> Total space available for javascript objects presently. //js objects
//external=> Any memory that node core is allocating for a objs that it needs to connect between js and native sides.
//E.g - buffer -> will go to external
//

/// Memory heap is the meomory layout where the dynamic allocation takes place.
// new operator is used stored value in heap.
/**
 * malloc()
 * calloc()
 * realloc()
 * Free()
 */