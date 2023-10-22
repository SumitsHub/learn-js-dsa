/** function to merge 2 sorted arrays - helper function for mergeSort */
function merge(array1, array2) {
  let result = []; // to store combined/merged array
  // pointers to array1 and array2 respectively
  let i = 0;
  let j = 0;

  // while both array pointers are not completely traversed
  // if any array becomes empty i.e. all items added to result then break
  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      result.push(array1[i]);
      i++;
    } else {
      result.push(array2[j]);
      j++;
    }
  }

  // continue adding remaining items of array1 if applicable
  while (i < array1.length) {
    result.push(array1[i]);
    i++;
  }
  // continue adding remaining items of array2 if applicable
  while (j < array2.length) {
    result.push(array2[j]);
    j++;
  }

  // return result array
  return result;
}

/**
 * Sorting input array using merge sort
 *
 * Space Complexity - O(n)
 * Time Complexity - O(nlogn)
 *
 * @param {*} array
 * @returns sorted array
 */
function mergeSort(array) {
  // if array with single element then return array -> consider it's sorted as only one element
  if (array.length === 1) return array;

  // find middle to divide array into 2
  let mid = Math.floor(array.length / 2);
  // divide array into 2
  let arr1 = array.slice(0, mid);
  let arr2 = array.slice(mid);

  // call divide arrays untill get single element array and then merge them
  return merge(mergeSort(arr1), mergeSort(arr2));
}

let arr1 = [3, 7, 1, 4, 2];

mergeSort(arr1);

/**
 * [3, 7, 1, 4, 2] -> [3, 7] [1, 4 ,2]
 * [3, 7] -> [3] [7] -> [3, 7]
 * [1, 4, 2] -> [1] [4, 2]
 * [4, 2] -> [4, 2]
 * [1] [4, 2] -> [1, 2, 4]
 * [3, 7] [1, 2, 4] -> [1, 2, 3, 4, 7]
 *
 * NOTE -
 * merge() -> combines array
 * mergeSort -> divides array
 */
