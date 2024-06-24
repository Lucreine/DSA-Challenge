import { Stack } from './index'

describe('Stack', () => {
  it('Pushes a value', () => {
    const stack = new Stack()
    stack.push('1000')
    stack.push('2000')
    stack.push('3000')
    expect(stack.peek()).toEqual('3000')
  })

  it('Pops a value and returns it', () => {
    const stack = new Stack()
    stack.push('1000')
    stack.push('2000')
    stack.push('3000')
    expect(stack.pop()).toEqual('3000')
    expect(stack.peek()).toEqual('2000')
  })

  it('Peeks the next value', () => {
    const stack = new Stack()
    stack.push(1)
    stack.push(2)
    stack.push(3)
    expect(stack.peek()).toEqual(3)
  })
})
