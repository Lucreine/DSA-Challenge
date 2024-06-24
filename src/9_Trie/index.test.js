import { words } from '../utils/words'
import { Trie } from './index'

const createTrie = () => {
  const trie = new Trie()
  words.forEach((word) => trie.insert(word))
  return trie
}

describe('Trie', () => {
  it("Returns all words starting with 'co'", () => {
    const trie = createTrie()
    expect(trie.retrieve('co')).toEqual(
      expect.arrayContaining([
        'convict',
        'core',
        'computing',
        'contact',
        'conversation'
      ])
    )
  })

  it("Returns all words starting with 'marr'", () => {
    const trie = createTrie()
    expect(trie.retrieve('marr')).toEqual(['marriage'])
  })

  it("Returns all words starting with 'out'", () => {
    const trie = createTrie()
    expect(trie.retrieve('out')).toEqual(
      expect.arrayContaining(['out', 'outlet', 'outcome'])
    )
  })

  it('Returns null when there are no words', () => {
    const trie = createTrie()
    expect(trie.retrieve('idontexist')).toBeNull()
  })
})
