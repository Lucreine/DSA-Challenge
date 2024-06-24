export const createTestSuite = (LinkedListClass, name) => {
  describe(name, () => {
    describe('Insertion', () => {
      it('Inserts at the beginning', () => {
        const linkedList = new LinkedListClass()
        linkedList.prepend('B')
        linkedList.prepend('A')
        expect(linkedList.getFirst()).toEqual('A')
      })

      it('Inserts at the end', () => {
        const linkedList = new LinkedListClass()
        linkedList.append(1)
        linkedList.append(2)
        expect(linkedList.getLast()).toEqual(2)
      })

      it('Inserts at the specified index', () => {
        const linkedList = new LinkedListClass()
        linkedList.append('A')
        linkedList.append('B')
        linkedList.append('C')
        linkedList.append('D')
        linkedList.insertAt(2, 'Z')
        expect(linkedList.getAt(2)).toEqual('Z')
      })
    })

    describe('Removal', () => {
      it('Removes at the beginning', () => {
        const linkedList = new LinkedListClass()
        linkedList.append(1)
        linkedList.append(2)
        linkedList.removeFirst()
        expect(linkedList.getFirst()).toEqual(2)
      })

      it('Removes at the end', () => {
        const linkedList = new LinkedListClass()
        linkedList.append(1)
        linkedList.append(2)
        linkedList.removeLast()
        expect(linkedList.getLast()).toEqual(1)
      })

      it('Removes at the specified index', () => {
        const linkedList = new LinkedListClass()
        linkedList.append('A')
        linkedList.append('B')
        linkedList.append('C')
        linkedList.append('D')
        linkedList.removeAt(2)
        expect(linkedList.getAt(2)).toEqual('D')
      })
    })

    describe('Retrieval', () => {
      it('Finds a value', () => {
        const linkedList = new LinkedListClass()
        linkedList.append(100)
        linkedList.append(101)
        linkedList.append(102)
        linkedList.append(103)
        expect(linkedList.find(102)).toEqual(102)
      })

      it('Gets the first value', () => {
        const linkedList = new LinkedListClass()
        linkedList.append(100)
        linkedList.append(101)
        expect(linkedList.getFirst()).toEqual(100)
      })

      it('Gets the last value', () => {
        const linkedList = new LinkedListClass()
        linkedList.append(100)
        linkedList.append(101)
        expect(linkedList.getLast()).toEqual(101)
      })

      it('Gets the value at index', () => {
        const linkedList = new LinkedListClass()
        linkedList.append('A')
        linkedList.append('B')
        linkedList.append('C')
        expect(linkedList.getAt(1)).toEqual('B')
      })
    })
  })
}
