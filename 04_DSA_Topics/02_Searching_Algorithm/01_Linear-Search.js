/**
 * Linear Search Pseudocode -
 * - this function accepts an array and a value
 * - loop through the entire array and check if the current array element is equal to the value
 * - if it is, return the index at which the element is found
 * - if the value is never found, return -1
 *
 * Big O of Linear Search -
 * Best Case - O(1)
 * Worst Case - O(n)
 * Average Case - O(n)
 *
 */

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

linearSearch([2, 3, 4, 5, 6], 5); // 3
linearSearch([2, 3, 4, 5, 6], 9); // -1
linearSearch([2, 3, 4, 5, 6], 3); // 1

/**
 * following Array prototype methods used linear search -
 * find()
 * indexOf()
 * includes()
 */
