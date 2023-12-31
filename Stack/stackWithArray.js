class Stack {
  constructor() {
    this.items = []
  }

  push(value) {
    this.items.push(value)
  }

  pop() {
    if (this.items.length === 0) return 'underFlow'
    return this.items.pop()
  }

  peek() {
    if (this.isEmpty()) return 'stack is empty'
    return this.items[this.items.length - 1]
  }

  isEmpty() {
    return this.items.length === 0
  }

  size() {
    return this.items.length
  }
}

const newArrayStack = new Stack()

newArrayStack.push(2)
newArrayStack.push(3)
newArrayStack.push(4)
newArrayStack.push(6)
newArrayStack.push(7)

console.log(newArrayStack.peek());
console.log(newArrayStack.pop());
console.log(newArrayStack.peek());
console.log(newArrayStack.isEmpty());
console.log(newArrayStack.size());
