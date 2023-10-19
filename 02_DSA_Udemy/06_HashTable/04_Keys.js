class HashTable {
  constructor(size = 7) {
    this.dataMap = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
    }
    return hash;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.dataMap[index]) {
      this.dataMap[index] = [];
    }
    this.dataMap[index].push([key, value]);
  }

  get(key) {
    let index = this._hash(key);
    if (this.dataMap[index]) {
      let item = this.dataMap[index].find(arr => arr[0] === key);
      if (item) return item[1];
    }
    return undefined;
  }

  /** function returns all keys in the hash table */
  keys() {
    // empty array to store keys
    let allKeys = [];

    // iterate through dataMap
    for (let i = 0; i < this.dataMap.length; i++) {
      // if value exists at current index
      if (this.dataMap[i]) {
        // iterate though the array ast dataMap[i]
        for (let j = 0; j < this.dataMap[i].length; j++) {
          // add keys to allKeys -> result array
          allKeys.push(this.dataMap[i][j][0]);
        }
      }
    }

    return allKeys;
  }
}

let ht = new HashTable();

ht.set('lumber', 70);
ht.set('washers', 50);
ht.set('bolts', 1400);
