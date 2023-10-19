/** HashTable class constructor */
class HashTable {
  // default size = 7
  constructor(size = 7) {
    this.dataMap = new Array(size);
  }

  // internal function to generate hash
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
    }
    return hash;
  }
}

let ht = new HashTable();
ht;

// NOTE -> in class definition -> methods get added to prototype and connot be accessed using for in loop
