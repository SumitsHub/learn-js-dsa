function selectionSort(arr) {
  let min;
  let n = arr.length;

  // loop for current item in the array that will be compared with rest of the items
  for (let i = 0; i < n - 1; i++) {
    min = i; // initialize min with current index
    // loop through rest of array and change value of min
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) min = j;
    }
    // if min changed -> there is item < current item
    // swap those
    if (i !== min) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
    console.log(arr);
    // this way, smaller numbers will get placed at the start of the array and continue..
  }

  return arr;
}

selectionSort([4, 2, 6, 5, 1, 3]);

// Array after each iteration
// [ 1, 2, 6, 5, 4, 3 ]
// [ 1, 2, 6, 5, 4, 3 ]
// [ 1, 2, 3, 5, 4, 6 ]
// [ 1, 2, 3, 4, 5, 6 ]
// [ 1, 2, 3, 4, 5, 6 ]
