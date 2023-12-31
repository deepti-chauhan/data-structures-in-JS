class Stack {
  constructor() {
    this.items = {}
    this.count = 0
  }

  push(value) {
    this.items[this.count++] = value
    return console.log(`items pushed ${value}`)
  }

  pop() {
    if (this.count === 0) {
      return console.log('underFlow')
    }

    this.count--
    const popItem = this.items[this.count]
    delete this.items[this.count]

    return console.log(`item popped : ${popItem}`)
  }

  peek() {
    return console.log(`item peeked : ${this.items[this.count - 1]}`)
  }

  size() {
    return this.count
  }

  isEmpty() {
    if (this.count === 0) return true
    else return false
  }
}

const newStack = new Stack()

newStack.push(1)
newStack.push(2)
newStack.push(3)
newStack.peek()
newStack.pop()
newStack.peek()
console.log(newStack.size())
console.log(newStack.isEmpty())
