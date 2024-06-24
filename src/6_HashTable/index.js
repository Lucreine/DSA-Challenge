export class HashTable {
  constructor(bucketsNum = 10) {
    this.buckets = new Array(bucketsNum).fill(null).map(() => []);
    this.count = 0;
  }

  get size() {
    return this.count;
  }

  #hash(key) {
    let hash = 0;
    for (let char of key) {
      hash = (hash << 5) - hash + char.charCodeAt(0);
      hash |= 0;
    }
    return Math.abs(hash) % this.buckets.length;
  }

  set(key, value) {
    const index = this.#hash(key);
    const bucket = this.buckets[index];

    for (let pair of bucket) {
      if (pair[0] === key) {
        pair[1] = value;
        return;
      }
    }

    bucket.push([key, value]);
    this.count++;
  }

  get(key) {
    const index = this.#hash(key);
    const bucket = this.buckets[index];

    for (let pair of bucket) {
      if (pair[0] === key) {
        return pair[1];
      }
    }

    return null;
  }

  remove(key) {
    const index = this.#hash(key);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        this.count--;
        return;
      }
    }
  }
}