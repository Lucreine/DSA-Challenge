import { Tree } from './index'

/*
         1
      /  |  \
     2   8   4
    / \    / | \
   15 11  9  6  7
             |
            100
*/
const createTree = () => {
  const tree = new Tree()
  const rootNode = tree.insert(1)
  const node2 = rootNode.insert(2)
  node2.insert(15)
  node2.insert(11)
  rootNode.insert(8)
  const node4 = rootNode.insert(4)
  node4.insert(9)
  node4.insert(6).insert(100)
  node4.insert(7)
  return tree
}

describe('Tree', () => {
  it('Breadth-first search', () => {
    const tree = createTree()
    const values = []
    tree.BFS((v) => values.push(v))
    expect(values).toEqual([1, 2, 8, 4, 15, 11, 9, 6, 7, 100])
  })

  it('Pre-order depth-first search', () => {
    const tree = createTree()
    const values = []
    tree.preOrderDFS((v) => values.push(v))
    expect(values).toEqual([1, 2, 15, 11, 8, 4, 9, 6, 100, 7])
  })

  it('Post-order depth-first search', () => {
    const tree = createTree()
    const values = []
    tree.postOrderDFS((v) => values.push(v))
    expect(values).toEqual([15, 11, 2, 8, 9, 100, 6, 7, 4, 1])
  })
})
