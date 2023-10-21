/**
 * Sorting an array using Bubble Sort
 *
 * Bubble Sort -> largest/smallest element will get shifted to last index, then process continues for remaining array
 *
 * */
function bubbleSort(array) {
  // loop to iterate till before the last sorted element
  // after each iteration, one item will get sorted
  for (let i = array.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

bubbleSort([4, 2, 6, 5, 1, 3]);

// Array after each iteration
// [ 2, 4, 5, 1, 3, 6 ]
// [ 2, 4, 1, 3, 5, 6 ]
// [ 2, 1, 3, 4, 5, 6 ]
// [ 1, 2, 3, 4, 5, 6 ]
// [ 1, 2, 3, 4, 5, 6 ]
