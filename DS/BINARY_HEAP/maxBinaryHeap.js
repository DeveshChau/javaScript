class MaxBinaryHeap {
    constructor() {
        this.heap = []
    }
    insert(v) {
        this.heap.push(v)
        if (this.heap.length < 3) return this.heap
        return this.bubble(this.heap.length-1)
    }
    bubble(index) {
        let newElement = this.heap[index]
        while (index > 0) {
            let parentIndex = Math.floor((index-1)/2)
            if (this.heap[index] <= this.heap[parentIndex]) break
            this.heap[index] = this.heap[parentIndex]
            this.heap[parentIndex] = newElement
            index = parentIndex
        }
        return this.heap
    }
    extractMax() {
        if(!this.heap.length) return null
        let max = this.heap.shift()
        if (this.heap.length) {
            let last = this.heap.pop()
            this.heap.unshift(last)
            this.sinkDown(this.heap.indexOf(last))
        }
        return max
    }
    sinkDown(elementIdx) {
        let swapWithIndex
        let left = (elementIdx*2)+1
        let right = (elementIdx*2)+2
        while(this.heap[left]) {
            if (this.heap[left] && !this.heap[right]) {
                swapWithIndex = this.heap[left] > this.heap[elementIdx] && left
            } else if (this.heap[left] && this.heap[right]) {
                let max = this.heap[left] > this.heap[right] ? left : right
                swapWithIndex = this.heap[max] > this.heap[elementIdx] && max
            }
            if (!swapWithIndex) break
            let temp = this.heap[swapWithIndex]
            this.heap[swapWithIndex] = this.heap[elementIdx]
            this.heap[elementIdx] = temp
            elementIdx = swapWithIndex            
            left = (elementIdx*2)+1
            right = (elementIdx*2)+2
        }
    }
}
let mbh = new MaxBinaryHeap()
mbh.insert(50)
mbh.insert(45)
mbh.insert(40)
mbh.insert(35)
mbh.insert(30)
mbh.insert(25)
mbh.insert(20)
mbh.insert(60)
mbh.insert(70)
mbh.insert(38)
mbh.extractMax()