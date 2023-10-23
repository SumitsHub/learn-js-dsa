/**
 * Problem - Count Unique Values in Sorted Array
 *
 * @param {*} arr - sorted array
 * @returns number of unique values in an array
 */

function uniqueValues(arr) {
  let n = arr.length;
  if (n === 0) return n;
  // 2 pointers
  let i = 0;
  let j = i + 1;

  while (j < n) {
    if (arr[i] !== arr[j]) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    j++;
  }
  return i + 1;
}

uniqueValues([1, 1, 2, 2, 3, 4, 4, 5]); // 5
