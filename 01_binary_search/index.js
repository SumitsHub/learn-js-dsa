/**
 * NOTE- Binary Search works with sorted array
 */

// Sorted Array
let arr = [3, 6, 8, 12, 14, 17, 25, 29, 31, 36, 42, 47, 53, 55, 62];

/**
 *
 * @param {*} arr - input array of numbers
 * @param {*} num - number searched for
 * @returns - index of num in arr
 */
function binarySearch(arr, num) {
  let l = 0;
  let h = arr.length - 1;
  let m;

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
// function RBS(l, h, key) {
//   if (l === h) {
//     if (arr[l] === key) return l;
//     else return -1;
//   } else {
//     let mid = Math.floor((l + h) / 2);
//     if (key === arr[mid]) return mid;
//     if (arr[mid] > key) return RBS(l, mid - 1, key);
//     else return RBS(mid + 1, h, key);
//   }
// }

// console.log(RBS(0, arr.length, 42)); // 10
// console.log(RBS(0, arr.length, 62)); // 14
// console.log(RBS(0, arr.length, 30)); // -1

// Simpler version of RBS
function RBS(arr, num, low = 0, high = arr.length - 1) {
  if (low > high) return -1;

  let mid = Math.floor((low + high) / 2);

  if (arr[mid] === num) return mid;
  else {
    if (arr[mid] > num) return RBS(arr, num, low, mid - 1);
    else return RBS(arr, num, mid + 1, high);
  }
}

console.log(RBS(arr, 17)); // 5

arr = [5, 9, 12, 16, 27, 34, 41, 59, 72, 82];

console.log(RBS(arr, 16)); // 3
console.log(RBS(arr, 59)); // 7
console.log(RBS(arr, 34)); // 5
