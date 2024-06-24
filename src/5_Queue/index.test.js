import { Queue } from './index'

describe('Queue', () => {
  it('Enqueues a value', () => {
    const queue = new Queue()
    queue.enqueue('1000')
    queue.enqueue('2000')
    queue.enqueue('3000')
    expect(queue.peek()).toEqual('1000')
  })

  it('Dequeues a value and returns it', () => {
    const queue = new Queue()
    queue.enqueue('1000')
    queue.enqueue('2000')
    queue.enqueue('3000')
    expect(queue.dequeue()).toEqual('1000')
    expect(queue.peek()).toEqual('2000')
  })

  it('Peeks the next value', () => {
    const queue = new Queue()
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)
    expect(queue.peek()).toEqual(1)
  })
})
