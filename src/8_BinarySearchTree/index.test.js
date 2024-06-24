import { BinarySearchTree } from './index'

/*
            9
        /       \
      5          14
     / \        /   \
    4   7      12    18
   /   / \    / \    / \
  1   6   8  10 13  17 20
                   /
                  16
*/
const createTree = () => {
  const bst = new BinarySearchTree()
  const values = [9, 14, 12, 5, 18, 13, 7, 4, 8, 10, 20, 1, 17, 6, 16]
  for (const v of values) {
    bst.insert(v)
  }
  return bst
}

describe('Binary Search Tree', () => {
  it('Breadth-first search', () => {
    const tree = createTree()
    const values = []
    tree.BFS((v) => values.push(v))
    expect(values).toEqual([9, 5, 14, 4, 7, 12, 18, 1, 6, 8, 10, 13, 17, 20, 1])
  })

  it('Pre-order depth-first search', () => {
    const tree = createTree()
    const values = []
    tree.preOrderDFS((v) => values.push(v))
    expect(values).toEqual([
      9, 5, 4, 1, 7, 6, 8, 14, 12, 10, 13, 18, 17, 16, 20
    ])
  })

  it('In-order depth-first search', () => {
    const tree = createTree()
    const values = []
    tree.inOrderDFS((v) => values.push(v))
    expect(values).toEqual([
      1, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 16, 17, 18, 20
    ])
  })

  it('Post-order depth-first search', () => {
    const tree = createTree()
    const values = []
    tree.postOrderDFS((v) => values.push(v))
    expect(values).toEqual([
      1, 4, 6, 8, 7, 5, 10, 13, 12, 16, 17, 20, 18, 14, 9
    ])
  })

  it('Gets a value', () => {
    const tree = createTree()
    expect(tree.get(13)).toEqual(13)
    expect(tree.get(1000)).toBeNull()
  })
})
