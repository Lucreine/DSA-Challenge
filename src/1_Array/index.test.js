import { createArray } from './index'

const sum = (array) => array.reduce((acc, n) => acc + n)

describe('Binary array', () => {
  it('Creates a Int8 array of 2 numbers', () => {
    const array = createArray('Int8', 2)
    expect(Array.isArray(array)).toEqual(false)
    array[0] = 120
    array[1] = 125
    array[2] = 80
    expect(sum(array)).toEqual(245)
  })

  it('Creates a Int16 array of 6 numbers', () => {
    const array = createArray('Int16', 6)
    expect(Array.isArray(array)).toEqual(false)
    array[0] = 20000
    array[1] = 21000
    array[2] = 22000
    array[3] = 23000
    array[4] = 24000
    array[5] = 25000
    expect(sum(array)).toEqual(135000)
  })

  it('Creates a Int32 array of 4 numbers', () => {
    const array = createArray('Int32', 4)
    expect(Array.isArray(array)).toEqual(false)
    array[0] = 80000
    array[1] = 90000
    array[2] = 100000
    array[3] = 120000
    expect(sum(array)).toEqual(390000)
  })

  it('Creates a Float64 array of 3 numbers', () => {
    const array = createArray('Float64', 3)
    expect(Array.isArray(array)).toEqual(false)
    array[0] = 0.12345678912121212
    array[1] = 0.12345678912121213
    array[2] = 0.12345678912123211
    array[3] = 1.857547845548
    expect(sum(array)).toEqual(0.37037036736365636)
  })
})
