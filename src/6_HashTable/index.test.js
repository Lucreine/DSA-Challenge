import { HashTable } from './index'

const createSetAndGetTestCase = (map) => {
  map.set('name', 'John')
  map.set('surname', 'Doe')
  map.set('gender', 'Male')
  map.set('age', 40)
  map.set('city', 'London')
  expect(map.size).toEqual(5)
  expect(map.get('city')).toEqual('London')
  expect(map.get('age')).toEqual(40)
  expect(map.get('gender')).toEqual('Male')
  expect(map.get('surname')).toEqual('Doe')
  expect(map.get('name')).toEqual('John')
}

describe('HashTable', () => {
  it('Gets the correct map size', () => {
    const map = new HashTable()
    expect(map.size).toEqual(0)
    map.set('name', 'John')
    expect(map.size).toEqual(1)
  })

  it('Sets and gets multiple keys with 10 buckets', () => {
    createSetAndGetTestCase(new HashTable(10))
  })

  it('Sets and gets multiple keys with 2 buckets', () => {
    createSetAndGetTestCase(new HashTable(2))
  })

  it('Removes a key', () => {
    const map = new HashTable()
    map.set('name', 'John')
    map.remove('name')
    expect(map.get('name')).toBeNull()
  })
})
