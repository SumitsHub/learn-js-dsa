function insertionSort(arr) {
  let temp;
  let i, j;

  // start from 2nd element
  for (i = 1; i < arr.length; i++) {
    temp = arr[i];
    // compare with previous elements
    for (j = i - 1; j > -1 && arr[j] > temp; j--) {
      arr[j + 1] = arr[j];
    }
    // inserting element at correct position
    arr[j + 1] = temp;
  }
  return arr;
}

insertionSort([4, 2, 6, 5, 1, 3]);

// array after each iteration
// [ 2, 4, 6, 5, 1, 3 ]
// [ 2, 4, 6, 5, 1, 3 ]
// [ 2, 4, 5, 6, 1, 3 ]
// [ 1, 2, 4, 5, 6, 3 ]
// [ 1, 2, 3, 4, 5, 6 ]
