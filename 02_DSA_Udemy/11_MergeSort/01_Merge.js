/**
 * function to merge 2 sorted arrays - helper function for mergeSort
 *
 * */
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

let arr1 = [1, 3, 7, 8];
let arr2 = [2, 4, 5, 6];

merge(arr1, arr2);

// [1, 2, 3, 4, 5, 6, 7, 8]
