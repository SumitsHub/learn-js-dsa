function swap(array, firstIndex, secondIndex) {
  let temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

// function to place item at pivotIndex such that all previous items will be smaller and later are greater
function pivot(array, pivotIndex = 0, endIndex = array.length) {
  let swapIndex = pivotIndex; // initialize swapIndex to pivotIndex
  // iterate through array starting from pivot index -> purpose is to move all smaller elements to left of pivot value
  for (let i = pivotIndex + 1; i < endIndex; i++) {
    // if any element if smaller then move element to right of pivot
    if (array[i] < array[pivotIndex]) {
      swapIndex++; // point to next of swapped index (it will on right of the pivot index and will increase on every swap)
      swap(array, swapIndex, i);
    }
  }
  // finally swap that last smaller value found with pivot value
  swap(array, pivotIndex, swapIndex);
  // return current swap index -> index of pivot value after swapping
  return swapIndex;
}

function quickSort(array, left = 0, right = array.length) {
  if (left < right) {
    let pivotIndex = pivot(array, left, right);
    quickSort(array, left, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, right);
  }
  return array;
}

let arr = [4, 6, 1, 7, 3, 2, 5];

quickSort(arr);
