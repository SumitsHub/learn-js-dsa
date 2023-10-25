function insertionSort(arr) {
  let i, j;

  // start from 2nd element
  for (i = 1; i < arr.length; i++) {
    const currentElement = arr[i];
    j = i - 1;

    // Move elements of arr[0..i-1] that are greater than currentElement
    // to one position ahead of their current position
    while (j >= 0 && arr[j] > currentElement) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Place the currentElement at its correct position
    arr[j + 1] = currentElement;
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
