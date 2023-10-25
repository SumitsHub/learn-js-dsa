/**
 * Binary Search Pseudocode -
 * - this function accepts a sorted array and a value
 * - create left pointer at the start of the array, and a right pointer at the end of the array
 * - while the left pointer comes before the right pointer
 *  - create a pointer in the middle
 *  - if you find the value you want, return the index
 *  - if the value is too small, move the left pointer up
 *  - if the value is too large, move the right pointer down
 * - if you never find the value, return -1
 *
 *
 * Binary Search Big O
 * Worst/Average case - O(logn)
 * Best Case - O(1)
 *
 * NOTE- Binary Search works only with SORTED Arrays
 */

function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length;
  let mid;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}

binarySearch([2, 8, 10, 13, 24, 43, 59, 78, 90, 95, 99], 43); // 5
binarySearch([2, 8, 10, 13, 24, 43, 59, 78, 90, 95, 99], 95); // 9
binarySearch([2, 8, 10, 13, 24, 43, 59, 78, 90, 95, 99], 45); // -1
