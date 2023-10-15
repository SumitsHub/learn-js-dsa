// Sorted Array
let arr = [3, 6, 8, 12, 14, 17, 25, 29, 31, 36, 42, 47, 53, 55, 62];

function binarySearch(arr, num) {
  let l = 0,
    h = arr.length - 1,
    m;

  while (l <= h) {
    m = Math.floor((l + h) / 2);
    if (arr[m] === num) {
      return m;
    } else {
      if (num > arr[m]) {
        l = m + 1;
      } else {
        h = m - 1;
      }
    }
  }
  return -1;
}

console.log(binarySearch(arr, 42)); // 10
console.log(binarySearch(arr, 62)); // 14
console.log(binarySearch(arr, 30)); // -1

/** Recursive Binary Search */
function RBS(l, h, key) {
  if (l === h) {
    if (arr[l] === key) return l;
    else return -1;
  } else {
    let mid = Math.floor((l + h) / 2);
    if (key === arr[mid]) return mid;
    if (arr[mid] > key) return RBS(l, mid - 1, key);
    else return RBS(mid + 1, h, key);
  }
}
console.log(RBS(0, arr.length, 42)); // 10
console.log(RBS(0, arr.length, 62)); // 14
console.log(RBS(0, arr.length, 30)); // -1

arr = [5, 9, 12, 16, 27, 34, 41, 59, 72, 82];

console.log(RBS(0, arr.length, 16)); // 3
console.log(RBS(0, arr.length, 59)); // 7
console.log(RBS(0, arr.length, 34)); // 5
