class Queue {
  constructor() {
    this.items = []
  }

  enqueue(value) {
    this.items.push(value)
  }

  dequeue() {
    if (this.isEmpty()) return 'underFlow'

    return this.items.shift()
  }

  front() {
    if (this.isEmpty()) return 'queue is empty'
    return this.items[0]
  }

  isEmpty() {
    return this.items.length === 0
  }

  size() {
    return this.items.length
  }
}



const newQueue = new Queue()

newQueue.enqueue(1)
newQueue.enqueue(7)
newQueue.enqueue(6)
newQueue.enqueue(4)

console.log(newQueue.dequeue()); // 1
console.log(newQueue.front()); // 7
console.log(newQueue.dequeue()); // 7
console.log(newQueue.front()); // 6
console.log(newQueue.isEmpty()); //false 
console.log(newQueue.size()); // 2
